enum MowerOrientation {
    North = "N",
    East = "E",
    South = "S",
    West = "W"
}

export class AutomaticLawnMower {
    private readonly _lawnTotalColumns: number;
    private readonly _lawnTotalRows: number;
    private _currentMowerPosition;

    constructor({ rowLength, columnLength }, { initialMowerColumn, initialMowerOrientation, initialMowerRow }) {
        this._lawnTotalColumns = columnLength + 1;
        this._lawnTotalRows = rowLength + 1;
        this._currentMowerPosition = {
            column: initialMowerColumn,
            orientation: initialMowerOrientation,
            row: initialMowerRow
        }
    }

    getMowerPosition() {
        return {
            mowerColumn: this._getMowerColumn(),
            mowerRow: this._getMowerRow(),
            mowerOrientation: this._getMowerOrientation()
        }
    }

    moveMowerForward() : void {
        if (! this._canMowerMoveForward()) { return; }

        switch(this._getMowerOrientation()) {
            case MowerOrientation.North: {
                this._setMowerColumn(this._getMowerColumn() + 1);
                break;
            }
            case MowerOrientation.East: {
                this._setMowerRow(this._getMowerRow() + 1);
                break;
            }
            case MowerOrientation.South: {
                this._setMowerColumn(this._getMowerColumn() - 1);
                break;
            }
            case MowerOrientation.West: {
                this._setMowerRow(this._getMowerRow() - 1);
                break;
            }
        }
    }

    turnLeft() {
        switch(this._getMowerOrientation()) {
            case MowerOrientation.North: {
                this._setMowerOrientation(MowerOrientation.West);
                break;
            }
            case MowerOrientation.East: {
                this._setMowerOrientation(MowerOrientation.North);
                break;
            }
            case MowerOrientation.South: {
                this._setMowerOrientation(MowerOrientation.East);
                break;
            }
            case MowerOrientation.West: {
                this._setMowerOrientation(MowerOrientation.South);
                break;
            }
        }
    }

    turnRight() {
        switch(this._getMowerOrientation()) {
            case MowerOrientation.North: {
                this._setMowerOrientation(MowerOrientation.East);
                break;
            }
            case MowerOrientation.East: {
                this._setMowerOrientation(MowerOrientation.South);
                break;
            }
            case MowerOrientation.South: {
                this._setMowerOrientation(MowerOrientation.West);
                break;
            }
            case MowerOrientation.West: {
                this._setMowerOrientation(MowerOrientation.North);
                break;
            }
        }
    }

    private _getMowerColumn() {
        return this._currentMowerPosition.column;
    }

    private _getMowerRow() {
        return this._currentMowerPosition.row;
    }

    private _getMowerOrientation()  {
        return this._currentMowerPosition.orientation;
    }

    private _setMowerColumn(column: number) : void {
        this._currentMowerPosition.column = column;
    }

    private _setMowerOrientation(orientation: "N" | "E" | "S" | "W") : void {
        this._currentMowerPosition.orientation = orientation;
    }

    private _setMowerRow(row: number) : void {
        this._currentMowerPosition.row = row;
    }

    private _canMowerMoveForward() : boolean {
        switch(this._getMowerOrientation()) {
            case MowerOrientation.North: {
                return this._currentMowerPosition.column < this._lawnTotalColumns;
            }
            case MowerOrientation.East: {
                return this._currentMowerPosition.row < this._lawnTotalRows;
            }
            case MowerOrientation.South: {
                return this._currentMowerPosition.column >= 0;
            }
            case MowerOrientation.West: {
                return this._currentMowerPosition.row >= 0;
            }
        }
    }
}
