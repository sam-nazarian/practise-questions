// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//
//     let maxStr = ''
//     let max = 0;
//     for(let i=0; i<s.length; i++){
//         let currMax = 1;
//         let str = s[i];
//
//         if(currMax> max){
//             max = currMax;
//             maxStr = str;
//         }
//
//         for(let j=i+1; j<s.length; j++){
//             str +=s[j];
//             if(isPalindrome(str)) currMax = str.length;
//             // max = Math.max(currMax, max);
//             if(currMax> max){
//                 max = currMax;
//                 maxStr = str;
//             }
//         }
//     }
//
//     console.log(max)
//     return maxStr
// };
//
// // console.log(isPalindrome('a')) //true
// /**
//  * @param {string} s
//  */
// function isPalindrome(s){
//     let l = 0;
//     let r = s.length-1;
//
//     while(l<r){
//         if(s[r] !== s[l]) return false;
//
//         l++;
//         r--;
//     }
//
//     return true;
// }
//
// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('a'))



// // 2D DP
// var longestPalindrome = function(s) {
//
//     if(s.length <= 1) return s;
//
//     // construct a 2D array
//     const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false)); //creates 7*7 2d arr (if length is 6)
//
//     // console.log(dp)
//
//
//     let lps = ''; //lps is longest palindrome subString
//
//     // base case for one character
//     for(let i = 0; i < s.length; i++) { //notice how it's (s.length), not (s.length-1)
//         dp[i][i] = true; //dp[1][1] = true / dp[2][2] = true
//         lps = s[i];
//     }
//     // console.log(dp)
//     // console.log(lps)
//
//     // console.log(s)
//     // base case for two characters
//
//     //default is already false, so don't need to do anything or default
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === s[i + 1]) dp[i][i+1] = true;
//         if(dp[i][i+1]) lps = s.substring(i, i + 2); //+1 cause last substr is not included in substring()
//     }
//     //constantly update the lps var
//
//     // expand to three or more characters
//     for(let i = s.length - 1; i >= 0; i--) { //start at last idx, and go to 0(including 0)
//         // console.log(i)
//         for(let j = i + 2; j < s.length; j++) {
//             // console.log('i:',i, '\tj:',j)
//             console.log('1',dp[i][j]);
//             console.log('2',dp[i+1][j-1]);
//             dp[i][j] = dp[i+1][j-1] && s[i] === s[j]; //changes the val of true/false
//             //if current vals of j & i are equal, then check
//
//             // console.log('2',dp[i][j])
//
//             if(dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
//         }
//     }
//
//     console.log(dp)
//
//     // console.log(dp)
//
//     return lps;
// }
//
//
// console.log(longestPalindrome('abaabc'))



var longestPalindrome = function(s) {

    let lps = s[0]; //longest palindrome string

    let arr = []; //this is row/start
    for(let i=0; i<s.length; i++){
        arr[i] = []; //creating the column/end

        for(let j=0; j<s.length; j++){
            //j here is for each column/end
            arr[i][j] = false;
        }
    }

    // console.log(arr)

    //set arr[i][i] to true, cause a single string is a palindrome
    for(let i=0; i<s.length; i++){
        arr[i][i] = true
    }

    for(let i=0; i<s.length; i++){
        if(s[i] === s[i+1]) {
            lps = s.slice(i,i+2);
            arr[i][i + 1] = true;
        }
    }

    for(let i=s.length-1; i>=0; i--){ //start (go from end, cause i+1 might be false below it) since the top is depending on the row below it, so start from buttom
        for(let j=i+2; j<s.length; j++){ //end

            //if start & end are the same && the str between i&j is palin, then entire str is palin
            if(s[i] === s[j] && arr[i+1][j-1] === true) {
                arr[i][j] = true; //REMEMBER DIFFERENCE BETWEEN 'ARR' & 'S', they're not the same
            }

            if(arr[i][j] === true && lps.length < s.slice(i,j+1).length ) lps = s.slice(i,j+1);
        }
    }


    console.log(arr)
    console.log(lps)
    // console.log(arr[7][2] === true)

    // if(arr[7][2] === true)
    //check for arr[i+1]

    return lps
}

// longestPalindrome('abaabc')
longestPalindrome('aaaaa')