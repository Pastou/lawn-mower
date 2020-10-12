import { expect } from "chai";
import { parseInput } from "./parseInput";

describe("parseInput", () => {
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
