# lawn-mower

Given:
- the upper right corner position,
- For as many lawn-mower as there is:
    - the initial lawn-mower position and orientation of type `N`, `E`, `S` or `W` (north,east,south,west),
    - a list of instructions of type `L`, `R` or `F` (left, right, forward)

We want to know for each lawn-mower give its final position and orientation on the lawn.

### Example

```ts
Initial input
3 3
1 1 "N"
"FLF"

//  initial    -->       F       -->       L       -->       F
//  . . . .           . . . .           . . . .           . . . .
//  . . . .           . ^ . .           . < . .           < . . .
//  . ^ . .           . . . .           . . . .           . . . .
//  . . . .           . . . .           . . . .           . . . .

Expected output 
"0 2 W"
```

### Notes:
- a map of size 3,2 means 0 ≤ x ≤ 3 and 0 ≤ y ≤ 2
- the robots cannot get out of the map. If instructed to move outside the boundaries, the robots stays where it is.
