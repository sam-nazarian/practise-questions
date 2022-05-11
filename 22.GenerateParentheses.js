//order doesn't matter for combination, but this problem is more a permutation question, even though it writes about permutation

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    let final = []; //all bracket combinations

    dfs(0,0, '');
    function dfs(openCount,closeCount, bracket){
        //base-cases
        if(openCount === n && closeCount === n){
            final.push(bracket);
            return;
        }
        if(openCount > n || closeCount > n) return;

        //conditions
        if(openCount === closeCount) {
            dfs(openCount+1, closeCount, bracket+'(');
        } else {
            dfs(openCount+1, closeCount, bracket+'(')
            dfs(openCount, closeCount+1, bracket+')')
        }
    }

    return final
};

console.log(generateParenthesis(3))

// for(let i=0; i<n; i++){
//     bracket.push('{')
// }
// for(let i=0; i<n; i++){
//     bracket.push('}')
// }
//
// console.log(bracket.join(''))
// return bracket;