/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {


    let max = -Infinity;//typeof infinity is number
    // console.log(max)

    for(let i=0; i<num.length; i++){
        if(num[i] === num[i-1] && num[i] === num[i-2]){
            max = Math.max(num[i], max)
        }
    }

    // console.log(max)


    if(max === -Infinity){
        return '';
    }else{
        return `${max}${max}${max}`
    }
};

console.log(largestGoodInteger('42352338'))