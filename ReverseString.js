/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     const originalS = [...s];
//
//     let leftP = 0;
//     for(let rightP=s.length-1; rightP >= 0; rightP--){
//         s[leftP] = originalS[rightP];
//
//         leftP++;
//     }
//
//
//
//     console.log(s)
//
// };


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let leftP = 0;
    let rightP = s.length-1;

    while(leftP < rightP){

        //swap leftP & rightP
        let temp = s[leftP]; //a
        s[leftP] = s[rightP];
        s[rightP] = temp;

        leftP++;
        rightP--;
    }

    console.log(s)
    return s.join('');
};

console.log(reverseString(["h","e","l","l","o"]))