const lineByLine = require("n-readlines");

export function parseInput(inputPath) {
    const readLineInterface = buildReadlineInterface(inputPath);
    let line = readLineInterface.next();
    const { lawnColumns, lawnRows } = parseLawnDimensions(line);
    const mowersPositionAndInstructions = parseMowersPositionAndInstructions(
        readLineInterface
    );

    return {
        lawnColumns,
        lawnRows,
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

function parseLawnDimensions(line) {
    const [lawnRows, lawnColumns] = line.toString().split(" ").map(Number);
    return { lawnColumns, lawnRows };
}
