/**
 * @param {string} number
 * @param {string} digit
 * @return {character}
 */
var removeDigit = function(number, digit) {

    let largestSubs = -Infinity;
    for(let i=0; i<number.length; i++){
        if(number[i] === digit){
            let currSubs;
            if(i === 0) {
                currSubs = number.slice(1);
            } else if(i === number.length-1) {
                currSubs = number.slice(0, number.length-1)
            } else {
                const half1 = number.slice(0,i)
                const half2 = number.slice(i+1);

                currSubs = half1 + half2
            }

            // console.log('currSubs:',currSubs)

            if(currSubs > largestSubs){
               largestSubs = currSubs;
           }
        }
    }

    return largestSubs;

};
console.log(removeDigit('551', '5'))

// const currSubs = Number( number.split(/1/s).join('') );
// removeDigit('123', '3');

// const left = number.slice(0,2) //
// const right = number.slice(2)
// console.log(left);
// console.log(right)

// const str = 'Hello';
// const substr = str.slice(0, -2);
// console.log(substr)

//char & string are same in js