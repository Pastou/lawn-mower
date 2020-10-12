import * as LineByLine from "n-readlines";

export function buildReadLineInterface(inputPath) {
    let lineIndex = 0;
    const readLineInterface = buildReadlineInterface(inputPath);

    return {
        getNextLine() {
            lineIndex++;
            const nextLine = readLineInterface.next();
            if (!nextLine) {
                return false;
            }
            if (nextLine.toString() === "") {
                return this.getNextLine();
            }

            return nextLine.toString();
        },
        getLineIndex() {
            return lineIndex;
        }
    };
}

function buildReadlineInterface(filePath) {
    return new LineByLine(filePath);
}
