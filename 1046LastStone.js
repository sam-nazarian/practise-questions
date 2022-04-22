/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {


    let i = stones.length;
    console.log(i)

    while(i > 1) {
        stones.sort((a, b) => {
            // if(typeof a === String) return -1;
            // if(typeof b === String) return -1;
            return b - a; //6-1
        })

        console.log('stonesArr:', stones)

        const y = stones[0]; //y is bigger
        const x = stones[1];

        if (y === x) {
            stones[0] = '';
            stones[1] = '';
            i -= 2; // REMEMBER '-' MUST BE BEFORE '='
        }

        if (x < y) {
            stones[0] = y - x;  //y
            stones[1] = ''; //x
            i--;
        }
        console.log(stones, i)
    }

    console.log('returnVal:', stones.join('')*1)
    return stones.join('')*1
};

// lastStoneWeight([2,7,4,1,8,1]);
// lastStoneWeight([1]);
// lastStoneWeight([10,4,2,10]); //2
//O(n log n)

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight2 = function(stones){

    while(stones.length > 1) {
        stones.sort((a, b) => {
            //REMEMBER TYPEOF DOES NOT HAVE A CAPITAL LETTER, SO NOT 'String', CORRECT  'string' , same thing with 'number'
            if (typeof a === 'string') return 1;
            if (typeof b === 'string') return -1;
            return a - b; //sort by asc
        })
        console.log(stones)

        const x = stones.pop();
        const y = stones.pop();
        console.log('x', x, 'y', y)
        let difference = Math.abs(x - y); //for difference you can absolute the val
        if (difference !== 0) stones.push(difference)
    }

    return stones.join('') *1
}

// console.log(lastStoneWeight2([10,4,2,10]))



var lastStoneWeight3 = function(stones) {
    if(stones.length < 2) return stones;
    stones.sort((a,b) => a-b);
    let a = stones.pop();
    let b = stones.pop();
    const difference = Math.abs(a-b);
    stones.push(difference)
    // stones.push(Math.abs(a-b));

    return lastStoneWeight3(stones);
};

console.log(lastStoneWeight3([10,4,2,10] ) )

