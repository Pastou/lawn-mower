import { AutomaticLawnMower } from "./AutomaticLawnMower";
import { parseInput } from "./parseInput";

const { upperRightCornerColumn, upperRightCornerRow, mowersPositionAndInstructions } = parseInput(
    `${__dirname}/mainInput.txt`
);
for (const { initialColumn, initialOrientation, initialRow, instructions } of mowersPositionAndInstructions) {
    const automaticLawnMower = new AutomaticLawnMower(
        { upperRightCornerColumn, upperRightCornerRow },
        {
            initialMowerColumn: initialColumn,
            initialMowerOrientation: initialOrientation,
            initialMowerRow: initialRow
        }
    );
    for (const instruction of instructions) {
        switch (instruction) {
            case "F": {
                automaticLawnMower.moveMowerForward();
                break;
            }
            case "L": {
                automaticLawnMower.turnLeft();
                break;
            }
            case "R": {
                automaticLawnMower.turnRight();
                break;
            }
        }
    }
    const { mowerColumn, mowerRow, mowerOrientation } = automaticLawnMower.getMowerPosition();
    console.log(`${mowerRow} ${mowerColumn} ${mowerOrientation}`);
}
