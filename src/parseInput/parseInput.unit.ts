import { expect } from "chai";
import { parseInput } from "./parseInput";

describe("parseInput", () => {
    it("should return the lawn columns, rows and mowers initial position and instructions", () => {
        const result = parseInput(`${__dirname}/testInput.txt`);

        expect(result).to.deep.equal({
            upperRightCornerColumn: 5,
            upperRightCornerRow: 5,
            mowersPositionAndInstructions: [
                {
                    initialColumn: 2,
                    initialOrientation: "N",
                    initialRow: 1,
                    instructions: ["L", "F", "L", "F", "L", "F", "L", "F", "F"]
                },
                {
                    initialColumn: 3,
                    initialOrientation: "E",
                    initialRow: 3,
                    instructions: ["F", "F", "R", "F", "F", "R", "F", "R", "R", "F"]
                }
            ]
        });
    });
});
