import { expect } from "chai";
import { parseInput } from "./parseInput";

describe("parseInput", () => {
    describe("when the input is well formatted", () => {
        it("should return the lawn columns, rows and mowers initial position and instructions", () => {
            const result = parseInput(`${__dirname}/testInput.txt`);

            expect(result).to.deep.equal({
                upperRightCornerColumn: 9,
                upperRightCornerRow: 7,
                mowersPositionAndInstructions: [
                    {
                        initialColumn: 4,
                        initialOrientation: "N",
                        initialRow: 3,
                        instructions: ["L", "F", "L", "F", "L", "F", "L", "F", "F", "R", "F"]
                    },
                    {
                        initialColumn: 5,
                        initialOrientation: "E",
                        initialRow: 4,
                        instructions: ["F", "F", "R", "F", "F", "R", "F", "R", "R", "F", "L", "F", "L", "F"]
                    }
                ]
            });
        });
    });

    describe("when the input is badly formatted", () => {
        it("should throw an error if the lawn upper right corner position is not valid", () => {
            expect(() => parseInput(`${__dirname}/badlyFormattedUpperRightCorner.txt`)).to.throw(
                `Line 1: Lawn upper right corner position -1 9 badly formatted: it must be positive integers separated by a space
Line 2: Mower initial position 3 4 N badly formatted: it must be positive integers within the lawn range
Line 3: Mower instructions LFLFLFLFFRFCA badly formatted: it must be 'R', 'L', or 'F'
Line 4: Mower initial position 4 5 G badly formatted: it must be positive integers within the lawn range
Line 4: Mower initial orientation 4 5 G badly formatted: it must be 'N', 'E', 'S' or 'W'`
            );
        });
    });
});
