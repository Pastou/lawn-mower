import { expect } from "chai";
import {
    areValidInstructions,
    isValidMowerInitialOrientation,
    isValidMowerInitialPosition,
    isValidUpperRightCornerPosition
} from "./validators";

describe("areValidInstructions", () => {
    it("should return true if every item is 'F', 'L' or 'R'", () => {
        const result = areValidInstructions(["F", "L", "R"]);

        expect(result).to.be.true;
    });

    it("should return false if any item is not 'F', 'L' or 'R'", () => {
        const result = areValidInstructions(["E", "L", "R"]);

        expect(result).to.be.false;
    });
});

describe("isValidMowerInitialOrientation", () => {
    it("should return true if 'N'", () => {
        const result = isValidMowerInitialOrientation("N");

        expect(result).to.be.true;
    });
    it("should return true if 'E'", () => {
        const result = isValidMowerInitialOrientation("E");

        expect(result).to.be.true;
    });
    it("should return true if 'S'", () => {
        const result = isValidMowerInitialOrientation("S");

        expect(result).to.be.true;
    });
    it("should return true if 'W'", () => {
        const result = isValidMowerInitialOrientation("W");

        expect(result).to.be.true;
    });
    it("should return false not 'N', 'E', 'S' or 'W'", () => {
        const result = isValidMowerInitialOrientation("J");

        expect(result).to.be.false;
    });
});

describe("isValidUpperRightCornerPosition", () => {
    it("should return true if the upper right corner column and row are positive integers", () => {
        const result = isValidUpperRightCornerPosition(4, 5);

        expect(result).to.be.true;
    });
    it("should return false if the upper right corner column is not a positive integer", () => {
        const result = isValidUpperRightCornerPosition(-12, 5);

        expect(result).to.be.false;
    });
    it("should return false if the upper right corner row is not a positive integer", () => {
        const result = isValidUpperRightCornerPosition(12, -5);

        expect(result).to.be.false;
    });
});

describe("isValidMowerInitialPosition", () => {
    it("should return true if the lawn-mower position is within the lawn range", () => {
        const result = isValidMowerInitialPosition(
            { initialColumn: 2, initialRow: 3 },
            { upperRightCornerColumn: 4, upperRightCornerRow: 5 }
        );

        expect(result).to.be.true;
    });

    it("should return false if the lawn-mower position is outside the lawn range", () => {
        const result = isValidMowerInitialPosition(
            { initialColumn: 12, initialRow: 16 },
            { upperRightCornerColumn: 4, upperRightCornerRow: 5 }
        );

        expect(result).to.be.false;
    });

    it("should return false if the lawn-mower initial row or column is not a positive integer", () => {
        const result = isValidMowerInitialPosition(
            { initialColumn: "e", initialRow: "b" },
            { upperRightCornerColumn: 4, upperRightCornerRow: 5 }
        );

        expect(result).to.be.false;
    });
});
