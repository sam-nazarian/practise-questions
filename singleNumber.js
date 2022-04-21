/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // s[i] : freq
    const map = new Map();

    for(let i=0; i<s.length; i++){
        map.set(s[i], (map.has(s[i]) ? map.get(s[i]) : 0 ) + 1);
    }

    console.log(map)

    for(let i=0; i<t.length; i++){
        if(!map.has(t[i])) return false;
        map.set(t[i], map.get(t[i])-1);

        if(map.get(t[i]) === 0){
            map.delete(t[i]);
        }
    }

    console.log(map)

    if(map.size !== 0) return false;
    return true;
};

// console.log(isAnagram('rat', 'car'))
console.log(isAnagram('ab', 'a'))