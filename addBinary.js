/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aP = a.length-1; //a pointer
    let bP = b.length-1; //b pointer
    let carry = 0;
    let res = [];

    //run while() if either condition is true
    while(aP>=0 || bP>=0){
        const aVal = a[aP] ? a[aP]*1 : 0;
        const bVal = b[bP] ? b[bP]*1: 0;

        const sum = aVal + bVal + carry;
        // console.log('a:', a[aP]*1, 'b:', b[bP]*1, 'carry:', carry, 'sum:', sum)
        console.log('a:', aVal, 'b:', bVal, 'carry:', carry, 'sum:', sum);

        if(sum === 0){
            carry = 0;
            res.unshift(0);
        }
        else if(sum === 1){
            carry = 0;
            res.unshift(1);
        }
        else if(sum === 2) {
            carry = 1;
            res.unshift(0);
        }
        else if(sum === 3) {
            carry = 1;
            res.unshift(1);
        }

        //check if there's a reminder

        aP--;
        bP--;
    }

    if(carry) res.unshift(carry);

    // console.log(res);

    return res.join('');
};

// addBinary('1010','1011');
console.log(addBinary('0','0'))


console.log( ( BigInt('0b'+110) + BigInt('0b'+111000) ).toString(2) )