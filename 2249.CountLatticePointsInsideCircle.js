// /**
//  * @param {number[][]} circles
//  * @return {number}
//  */
// var countLatticePoints = function(circles) {
//
//     console.log(circles)
// };
//
// countLatticePoints([[2,2,2],[3,4,1]]);






// javascript program to find
// countLattice points on a circle

// Function to count
// Lattice points on a circle
function countLattice(r) {
    if (r <= 0) return 0;
    // Initialize result as 4 for (r, 0), (-r. 0),
    // (0, r) and (0, -r)
    var result = 4;

    // Check every value that can be potential x
    for (x = 1; x < r; x++)
    {

        // Find a potential y
        var ySquare = r * r - x * x;
        var y = parseInt( Math.sqrt(ySquare));

        // checking whether square root is an integer
        // or not. Count increments by 4 for four
        // different quadrant values
        if (y * y == ySquare)
            result += 4;
    }

    return result;
}

// Driver code
var r = 5;
document.write(countLattice(r));
