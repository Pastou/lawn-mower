import { expect } from "chai";
import { AutomaticLawnMower } from "./AutomaticLawnMower";

describe("AutomaticLawnMower", () => {
    describe("getMowerPosition", () => {
        it("should return the mower row, column and orientation", () => {
            const automaticLawnMower = new AutomaticLawnMower(
                { columnLength: 4, rowLength: 4 },
                {
                    initialMowerColumn: 1,
                    initialMowerRow: 1,
                    initialMowerOrientation: "N"
                }
            );

            const result = automaticLawnMower.getMowerPosition();

            expect(result).to.deep.equal({
                mowerColumn: 1,
                mowerOrientation: "N",
                mowerRow: 1
            });
        });
    });

    describe("moveMowerForward", () => {
        it("should advance the lawn mower on the grid", () => {
            const automaticLawnMower = new AutomaticLawnMower(
                { columnLength: 4, rowLength: 4 },
                {
                    initialMowerColumn: 1,
                    initialMowerRow: 1,
                    initialMowerOrientation: "N"
                }
            );

            automaticLawnMower.moveMowerForward();

            expect(automaticLawnMower.getMowerPosition()).to.deep.equal({
                mowerColumn: 2,
                mowerOrientation: "N",
                mowerRow: 1
            });
        });

        it("should not advance the lawn mower when reaching the limit of the grid", () => {
            const automaticLawnMower = new AutomaticLawnMower(
                { columnLength: 4, rowLength: 4 },
                {
                    initialMowerColumn: 5,
                    initialMowerRow: 5,
                    initialMowerOrientation: "N"
                }
            );

            automaticLawnMower.moveMowerForward();

            expect(automaticLawnMower.getMowerPosition()).to.deep.equal({
                mowerColumn: 5,
                mowerOrientation: "N",
                mowerRow: 5
            });
        });
    });

    describe("turnLeft", () => {
        it("should turn left the lawn mower", () => {
            const automaticLawnMower = new AutomaticLawnMower(
                { columnLength: 4, rowLength: 4 },
                {
                    initialMowerColumn: 1,
                    initialMowerRow: 1,
                    initialMowerOrientation: "N"
                }
            );

            automaticLawnMower.turnLeft();

            const { mowerOrientation } = automaticLawnMower.getMowerPosition();
            expect(mowerOrientation).to.equal("W");
        });
    });

    describe("turnRight", () => {
        it("should turn right the lawn mower", () => {
            const automaticLawnMower = new AutomaticLawnMower(
                { columnLength: 4, rowLength: 4 },
                {
                    initialMowerColumn: 1,
                    initialMowerRow: 1,
                    initialMowerOrientation: "N"
                }
            );

            automaticLawnMower.turnRight();

            const { mowerOrientation } = automaticLawnMower.getMowerPosition();
            expect(mowerOrientation).to.equal("E");
        });
    });
});
