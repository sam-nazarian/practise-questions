// /**
//  * @param {string[]} d stands for domain
//  * @return {string[]}
//  */
// var subdomainVisits = function(d) {
//
//     //split[i] : amount
//     const map = new Map(); //split, is split of web inside the 'd' parameter
//
//     for(let i=0; i<d.length; i++){
//         const regExp = /(\d+) (.*)/;
//
//         // const amount = d[i].match(regExp);
//         const match = regExp.exec(d[i]);
//         const amount = match[1];
//         const web = match[2]
//
//         const split = web.split('.');
//         // console.log(split)
//
//         for(let i=0; i<split.length; i++){
//             if( map.has(split[i]) ){
//                 const val = map.get(split[i]) + amount;
//                 map.set(split[i], val);
//             }
//             if(!map.has(split[i])) map.set(split[i], amount);
//         }
//
//         // console.log(amount)
//         // console.log(web)
//         // console.log(split)
//     }
//
//
//     console.log(map)
//     const arr = [];
//     for(const [key, val] of map.entries()){
//         arr.push(`${val} ${key}`)
//     }
//
//     return arr;
//     // console.log(map)
// };



/**
 * @param {string[]} d stands for domain
 * @return {string[]}
 */
var subdomainVisits = function(d) {

    //split[i] : amount
    const map = new Map(); //split, is split of web inside the 'd' parameter

    for(let i=0; i<d.length; i++){
        const regExp = /(\d+) (.*)/;

        const match = regExp.exec(d[i]);
        const amount = match[1]*1; //amount for d[i]/ convert to a number
        const web = match[2] //web address for d[i]

        // console.log(amount)
        // console.log(web)

        const webSplit = web.split('.'); //webSplit for d[i]

        for(let i=0; i<webSplit.length; i++){
            const subDomain = webSplit.slice(i, webSplit.length).join('.')
            // console.log(subDomain)
            if( map.has(subDomain) ){
                const val = map.get(subDomain) + amount;
                map.set(subDomain, val);
            }
            if(!map.has(subDomain)) map.set(subDomain, amount);

        }

    }

    console.log(map)
    const arr = [];
    for(const [key, val] of map.entries()){
        arr.push(`${val} ${key}`)
    }

    return arr;
};
// console.log(subdomainVisits(["9001 discuss.leetcode.com"])) //["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])) //["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]