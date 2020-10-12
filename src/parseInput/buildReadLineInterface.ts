const LineByLine = require("n-readLines");

export function buildReadLineInterface(inputPath) {
    let lineIndex = 0;
    const readLineInterface = buildReadlineInterface(inputPath);

    return {
        getNextLine() {
            lineIndex++;
            const nextLine = readLineInterface.next();
            return nextLine ? nextLine.toString() : false;
        },
        getLineIndex() {
            return lineIndex;
        }
    };
}

function buildReadlineInterface(filePath) {
    return new LineByLine(filePath);
}
