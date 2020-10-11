const lineByLine = require("n-readlines");

export function parseInput(inputPath) {
    const readLineInterface = buildReadlineInterface(inputPath);
    let line = readLineInterface.next();
    const {
        upperRightCornerColumn,
        upperRightCornerRow
    } = parseLawnUpperRightPosition(line);
    const mowersPositionAndInstructions = parseMowersPositionAndInstructions(
        readLineInterface
    );

    return {
        upperRightCornerColumn,
        upperRightCornerRow,
        mowersPositionAndInstructions
    };
}

function buildReadlineInterface(filePath) {
    return new lineByLine(filePath);
}

function parseMowersPositionAndInstructions(readLineInterface) {
    const result = [];
    let line;
    while ((line = readLineInterface.next())) {
        const {
            initialColumn,
            initialOrientation,
            initialRow
        } = parseInitiationPosition(line);
        line = readLineInterface.next();
        const instructions = parseLawnInstructions(line);
        result.push({
            initialColumn,
            initialOrientation,
            initialRow,
            instructions
        });
    }
    return result;

    function parseInitiationPosition(line) {
        const [
            initialRow,
            initialColumn,
            initialOrientation
        ] = line.toString().split(" ");
        return {
            initialColumn: parseInt(initialColumn),
            initialOrientation,
            initialRow: parseInt(initialRow)
        };
    }

    function parseLawnInstructions(line) {
        return line.toString().split("");
    }
}

function parseLawnUpperRightPosition(line) {
    const [upperRightCornerRow, upperRightCornerColumn] = line
        .toString()
        .split(" ")
        .map(Number);
    return { upperRightCornerColumn, upperRightCornerRow };
}
