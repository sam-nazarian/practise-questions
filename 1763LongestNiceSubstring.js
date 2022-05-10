/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {

    //s[i]/char
    const set = new Set();

    let l = 0;
    let r = 0; //r always gets incremented by 1 every time
    let max = -Infinity;
    let maxStr = '';

    while(r<s.length){

        set.add(s[r]);
        set.add(s[l]);

        console.log(s.slice(l,r+1))

        if(isNice(s.slice(l,r+1))){
            // max = Math.max(max, (r-l)+1)
            if( (r-l)+1 > max){ //Notice difference between l & 1
                max = (r-l)+1;
                maxStr = s.slice(l,r+1);
            }

            console.log((r-l)+1)

        }else{
            //if not nice
            set.clear();
            l=r
        }

        r++;
    }


    /**
     * Returns true if str is nice, otherwise, returns false
     * @param str
     * @return {boolean}
     */
    function isNice(str){
        if(str.length === 1) return true;

        console.log(set)
        for(let i=0; i<str.length; i++) {
            if ( !set.has(str[i].toUpperCase()) || !set.has(str[i].toLowerCase()) ) return false
        }
        return true;
    }


    // console.log(maxStr)
    // return max;
    // console.log('max', max)
    return maxStr;
};

console.log(longestNiceSubstring('YazaAay'))