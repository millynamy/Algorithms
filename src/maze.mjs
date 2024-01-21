
/**
 * findEnd returns true if you can reach the end from the start only passing through land.
 * You can move Up, Down, Left or Right from each maze[i][j].
 * The maze has 0s representing land and 1s representing water.
 * @param {*} grid 
 * @param {*} start 
 * @param {*} end 
 * 
 * const grid = [[0, 0, 0],
 *               [0, 1, 0],
 *               [0, 1, 0]];
 */
function findEnd(grid, start, end) {
    return traverse(grid, start[0], start[1], end);
}
// set = {[1,2], ...}
function traverse(grid, row, col, end) {

    if (!isInGrid(grid, row, col)
        || grid[row][col] === 1 // if its water
        || grid[row][col] === 2 // if already visited
    ) {
        return false;
    }

    // check if at end
    if (row === end[0] && col === end[1]) {
        return true;
    }
    // visited
    grid[row][col] = 2;

    // if next is not water then go there.
    let up = traverse(grid, row - 1, col, end); // up
    let down = traverse(grid, row, col + 1, end); // down
    let right = traverse(grid, row + 1, col, end); // right 
    let left = traverse(grid, row, col - 1, end); // left

    return up || down || left || right;
}

function isInGrid(grid, row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

export { findEnd, };