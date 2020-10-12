export function areValidInstructions(instructions) {
    return instructions.every(isValidInstruction);
}

export function isValidUpperRightCornerPosition(cornerColumn, cornerRow) {
    return isPositiveInteger(cornerColumn) && isPositiveInteger(cornerRow);
}

export function isValidMowerInitialPosition(
    { initialColumn, initialRow },
    { upperRightCornerColumn, upperRightCornerRow }
) {
    return (
        isPositiveInteger(initialColumn) &&
        isPositiveInteger(initialRow) &&
        upperRightCornerColumn >= initialColumn &&
        upperRightCornerRow >= initialRow
    );
}

export function isValidMowerInitialOrientation(orientation) {
    return ["N", "E", "S", "W"].includes(orientation);
}

function isPositiveInteger(value) {
    return !isNaN(value) && typeof value === "number" && value >= 0;
}

function isValidInstruction(instruction) {
    return ["L", "F", "R"].includes(instruction);
}
