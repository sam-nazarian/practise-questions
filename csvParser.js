/**
 * @param {string} String
 * @return {string}
 */
const csvParser = function(s){

    const sArr = s.split(',');

    //remove any elm with'' (an empty string)
    for(let i=sArr.length; i>=0; i--){
        if(sArr[i] === '') sArr.splice(i, 1);
    }
    const sSpaceRemoved = sArr.join(' ');

    //remove    ” SYMBOL
    return sSpaceRemoved.replace(/”/g, '')
}

console.log( csvParser('ABC,”1,456.33”,12345,,,,”Smith, Jim”,c c c') )
console.log( csvParser('”ABC”,”1,456.33”,12345,”Smith, Jim”,”c c c”') )