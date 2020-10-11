const lineByLine = require("n-readlines");

export function parseInput(inputPath) {
    const readLineInterface = buildReadlineInterface(inputPath);
    const { upperRightCornerColumn, upperRightCornerRow } = parseLawnUpperRightPosition(readLineInterface);
    const mowersPositionAndInstructions = parseMowersPositionAndInstructions(readLineInterface);

    return {
        upperRightCornerColumn,
        upperRightCornerRow,
        mowersPositionAndInstructions
    };
}

function buildReadlineInterface(filePath) {
    return new lineByLine(filePath);
}

function parseLawnUpperRightPosition(readLineInterface) {
    const line = readLineInterface.next();
    const [upperRightCornerRow, upperRightCornerColumn] = line.toString().split(" ").map(Number);
    return { upperRightCornerColumn, upperRightCornerRow };
}

function parseMowersPositionAndInstructions(readLineInterface) {
    const mowersPositionAndInstructions = [];
    let line;
    while ((line = readLineInterface.next())) {
        const { initialColumn, initialOrientation, initialRow } = parseInitiationPosition(line);
        line = readLineInterface.next();
        mowersPositionAndInstructions.push({
            initialColumn,
            initialOrientation,
            initialRow,
            instructions: parseLawnInstructions(line)
        });
    }
    return mowersPositionAndInstructions;

    function parseInitiationPosition(line) {
        const [initialRow, initialColumn, initialOrientation] = line.toString().split(" ");
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
