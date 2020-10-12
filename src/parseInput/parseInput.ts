import {
    areValidInstructions,
    isValidMowerInitialPosition,
    isValidUpperRightCornerPosition,
    isValidMowerInitialOrientation
} from "./validators/validators";
import { buildReadLineInterface } from "./buildReadLineInterface";

export function parseInput(inputPath) {
    const parsingErrors = [];
    const readLineInterface = buildReadLineInterface(inputPath);
    const { upperRightCornerColumn, upperRightCornerRow } = parseLawnUpperRightPosition(
        readLineInterface,
        parsingErrors
    );
    const mowersPositionAndInstructions = parseMowersPositionAndInstructions(readLineInterface, {
        upperRightCornerColumn,
        upperRightCornerRow,
        parsingErrors
    });
    if (parsingErrors.length > 0) {
        throw new Error(parsingErrors.join("\n"));
    }

    return {
        upperRightCornerColumn,
        upperRightCornerRow,
        mowersPositionAndInstructions
    };
}

function parseLawnUpperRightPosition(readLineInterface, parsingErrors) {
    const line = readLineInterface.getNextLine();
    const [upperRightCornerRow, upperRightCornerColumn] = line.split(" ").map(Number);
    if (!isValidUpperRightCornerPosition(upperRightCornerColumn, upperRightCornerRow)) {
        addParsingError(
            parsingErrors,
            `Line ${readLineInterface.getLineIndex()}: Lawn upper right corner position ${line} badly formatted: it must be positive integers separated by a space`
        );
    }

    return { upperRightCornerColumn, upperRightCornerRow };
}

function parseMowersPositionAndInstructions(
    readLineInterface,
    { upperRightCornerColumn, upperRightCornerRow, parsingErrors }
) {
    const mowersPositionAndInstructions = [];
    let line;
    while ((line = readLineInterface.getNextLine())) {
        const { initialColumn, initialOrientation, initialRow } = parseInitiationPosition(line);
        if (
            !isValidMowerInitialPosition({ initialColumn, initialRow }, { upperRightCornerColumn, upperRightCornerRow })
        ) {
            addParsingError(
                parsingErrors,
                `Line ${readLineInterface.getLineIndex()}: Mower initial position ${line} badly formatted: it must be positive integers within the lawn range`
            );
        }
        if (!isValidMowerInitialOrientation(initialOrientation)) {
            addParsingError(
                parsingErrors,
                `Line ${readLineInterface.getLineIndex()}: Mower initial orientation ${line} badly formatted: it must be 'N', 'E', 'S' or 'W'`
            );
        }

        line = readLineInterface.getNextLine();
        mowersPositionAndInstructions.push({
            initialColumn,
            initialOrientation,
            initialRow,
            instructions: parseLawnInstructions(line, parsingErrors)
        });
    }
    return mowersPositionAndInstructions;

    function parseInitiationPosition(line) {
        const [initialRow, initialColumn, initialOrientation] = line.split(" ");
        return {
            initialColumn: parseInt(initialColumn),
            initialOrientation,
            initialRow: parseInt(initialRow)
        };
    }

    function parseLawnInstructions(line, parsingErrors) {
        if (!line) {
            addParsingError(
                parsingErrors,
                `Line ${readLineInterface.getLineIndex()}: Missing mower instructions ${line} badly formatted`
            );
            return [];
        }
        const instructions = line.split("");
        if (!areValidInstructions(instructions)) {
            addParsingError(
                parsingErrors,
                `Line ${readLineInterface.getLineIndex()}: Mower instructions ${line} badly formatted: it must be 'R', 'L', or 'F'`
            );
        }
        return instructions;
    }
}

function addParsingError(errors, message) {
    errors.push(message);
}
