/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let largest = 0;
    let longestSubstr = 0;
    let set = new Set();
    for(let i=0; i<s.length; i++){

        if(set.has(s[i])) longestSubstr=0;

        set.add(s[i]);
        longestSubstr++;

        if(longestSubstr>largest){
            largest = longestSubstr;
        }

        console.log('print every substr', longestSubstr)
    }

    console.log(largest)
    return largest;
};

// lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("dvdf") //3