/**
 * O(2) solution
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = [];

    for(let i=0; i<=n; i++) {

        const binaryNum = i.toString(2); //converts number to binary
        let count = 0;

        for (let j=0; j<binaryNum.length; j++) { //whenever loop gets stuck check for conditions of loop
            if (binaryNum[j] === '1') count++;
        }

        res.push(count)
    }


    return res;
};
console.log(countBits(50))