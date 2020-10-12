# lawn-mower

Given:
- The upper right corner position,
- For each lawn-mowers:
    - the initial lawn-mower position and orientation  (`N`, `E`, `S` or `W` i.e north,east,south,west),
    - a list of instructions of type `L`, `R` or `F` (left, right, forward)

We want to return for each lawn-mower its final position and orientation on the lawn.

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

## Installation
Execute the following script:

```
# clone and set up the repository
git clone https://github.com/Pastou/lawn-mower.git && cd lawn-mower && npm install
```

## How to test
Execute the following script:

```
npm run main
```

NB: If you want to test with a different output: change the '/src/mainInput.txt' file to suit your needs
