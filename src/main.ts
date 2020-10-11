import { AutomaticLawnMower } from "./AutomaticLawnMower";
import { parseInput } from "./parseInput";

const { lawnColumns, lawnRows, mowersPositionAndInstructions } = parseInput(
    `${__dirname}/parseInput/testInput.txt`
);
for (const {
    initialColumn,
    initialOrientation,
    initialRow,
    instructions,
} of mowersPositionAndInstructions) {
    const automaticLawnMower = new AutomaticLawnMower(
        { columnLength: lawnColumns, rowLength: lawnRows },
        {
            initialMowerColumn: initialColumn,
            initialMowerOrientation: initialOrientation,
            initialMowerRow: initialRow,
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
    const {
        mowerColumn,
        mowerRow,
        mowerOrientation,
    } = automaticLawnMower.getMowerPosition();
    console.log(`${mowerColumn} ${mowerRow} ${mowerOrientation}`);
}
