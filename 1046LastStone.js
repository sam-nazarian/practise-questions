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

    stones.push('1')
    stones.push('2')
    stones.push('3')
    stones.push('a')
    stones.push('b')
    stones.push('a')
    stones.sort((a, b) => {
        //REMEMBER TYPEOF DOES NOT HAVE A CAPITAL LETTER, SO NOT 'String', CORRECT  'string' , same thing with 'number'
        if(typeof a === 'string') {
            return 1;
        }
        // if(typeof b === 'string') return -1;

        // return a-b;
        return b-a;
        //greater value should be put first
    })
    console.log(stones)
}

lastStoneWeight2([10,4,2,10])