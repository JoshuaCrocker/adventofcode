module.exports = function (grid, xStep, yStep) {
    let x = 0;
    let treeCount = 0;

    console.log(`Rows: ${grid.length}`);
    console.log(`Cols: ${grid[0].length}`);

    for (let y = 0; y < grid.length; y += yStep) {
        console.log(`(${x}, ${y}) = ${grid[y][x]}`);

        if (grid[y][x] == '#') treeCount++;

        x += xStep;

        if (x >= grid[y].length) x = x - grid[y].length;
    }

    return treeCount;
};
