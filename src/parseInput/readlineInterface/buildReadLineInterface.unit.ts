import { expect } from "chai";
import * as sinon from "sinon";
import { buildReadLineInterface } from "./buildReadLineInterface";

describe("buildReadLineInterface", () => {
    let readLineInterface;
    beforeEach(() => {
        readLineInterface = buildReadLineInterface(`${__dirname}/readLinerTestInput.txt`);
    });

    it("should try to get the next line until it reaches a none empty line", () => {
        const getNextLineSpy = sinon.spy(readLineInterface, "getNextLine");

        readLineInterface.getNextLine();

        expect(getNextLineSpy.calledTwice).to.be.true;
    });

    it("should return the first not empty line", () => {
        const result = readLineInterface.getNextLine();

        expect(result).to.equal("7 9");
    });

    it("should return false when reaching the end of the file", () => {
        readLineInterface.getNextLine();
        readLineInterface.getNextLine();
        readLineInterface.getNextLine();
        const result = readLineInterface.getNextLine();

        expect(result).to.be.false;
        expect(readLineInterface.getLineIndex()).to.equal(5);
    });
});
