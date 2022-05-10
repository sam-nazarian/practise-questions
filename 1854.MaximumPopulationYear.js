// /**
//  * @param {number[][]} logs
//  * @return {number}
//  */
// var maximumPopulation = function(logs) {
//
//     let max = 0;
//     logs.sort((a,b) => a[0]-b[0]); //sort based on birthYear in asc order
//
//     //go through every single year that's on the list
//     for(let i=logs[0][0]; i<=logs[logs.length-1][1]; i++){
//         let currCount = 0;
//         for(let j=0; j<logs.length; j++){
//             if(i >= logs[j][0] && i < logs[j][1]) currCount++;
//         }
//
//         if(currCount > max){
//             max = currCount;
//         }
//     }
//
//     return max;
// };

// const ans = maximumPopulation([[1950,1955],[1950,1956],[1950,1957],[1950,1958],[1950,1959],[1950,1960],[1950,1961]])
// maximumPopulation([[1950,1961],[1960,1971],[1970,1981]])



/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {

    let max = 0;
    let earliest = 0;
    logs.sort((a,b) => a[0]-b[0]); //sort based on birthYear in asc order

    //go through every single year that's on the list
    for(let i=logs[0][0]; i<=logs[logs.length-1][1]; i++){
        let currCount = 0;
        for(let j=0; j<logs.length; j++){
            if(i >= logs[j][0] && i < logs[j][1]) currCount++;
        }

        if(currCount > max){
            max = currCount;
            earliest = i; //whenever max changes, it changes for the first/earliest year
        }
    }

    return earliest;
};

const ans = maximumPopulation([[1993,1999],[2000,2010]])
console.log(ans)