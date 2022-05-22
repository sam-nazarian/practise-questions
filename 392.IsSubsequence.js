/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    if(s.length === 0) return true;

    let sP = 0; //p stands for pointer
    let tP = 0;

    while(tP < t.length){

        if(t[tP] === s[sP]) sP++;
        if(sP === s.length) return true; //if we go through every sP

        tP++;
    }

    return false;
};


isSubsequence('abc', 'ahbgdc')