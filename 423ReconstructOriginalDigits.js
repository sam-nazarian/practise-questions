// /**
//  * @param {string} s
//  * @return {string}
//  */
// var originalDigits = function(s) {
//
//     //character : freq
//     const map = new Map();
//     let ans = '';
//
//     for(let i=0; i<s.length; i++){
//         map.set(s[i],( map.has(s[i]) ? map.get(s[i]) : 0) + 1 )
//     }
//
//     const calcNumber = function(val, ...char){
//         //if arg is given we wanna check it otherwise don't
//
//         if(char[0], char[1], char[2], char[3], char[4]){
//             while( map.get(char[0]) && map.get(char[1]) && map.get(char[2]) && map.get(char[3]) && map.get(char[4]) ){
//                 map.set(char[0], map.get(char[0])-1)
//                 map.set(char[1], map.get(char[1])-1)
//                 map.set(char[2], map.get(char[2])-1)
//                 map.set(char[3], map.get(char[3])-1)
//                 map.set(char[4], map.get(char[4])-1)
//
//                 ans += val;
//             }
//             return;
//         }
//
//         if(char[0], char[1], char[2], char[3]){
//             while( map.get(char[0]) && map.get(char[1]) && map.get(char[2]) && map.get(char[3]) ){
//                 map.set(char[0], map.get(char[0])-1)
//                 map.set(char[1], map.get(char[1])-1)
//                 map.set(char[2], map.get(char[2])-1)
//                 map.set(char[3], map.get(char[3])-1)
//
//                 ans += val;
//             }
//             return;
//         }
//
//         if(char[0], char[1], char[2]){
//             while( map.get(char[0]) && map.get(char[1]) && map.get(char[2]) ){
//                 map.set(char[0], map.get(char[0])-1)
//                 map.set(char[1], map.get(char[1])-1)
//                 map.set(char[2], map.get(char[2])-1)
//
//                 ans += val;
//             }
//             return;
//         }
//         if(char[0], char[1]){
//             while( map.get(char[0]) && map.get(char[1]) ){
//                 map.set(char[0], map.get(char[0])-1)
//                 map.set(char[1], map.get(char[1])-1)
//
//                 ans += val;
//             }
//             return;
//         }
//         if(char[0]){
//             while( map.get(char[0]) ){
//                 map.set(char[0], map.get(char[0])-1)
//
//                 ans += val;
//             }
//             return;
//         }
//     }
//
//     calcNumber('0','z','e','r','o')
//     calcNumber('1','o','n','e')
//     calcNumber('2','t','w','o')
//     calcNumber('3','t','h','r','e','e')
//     calcNumber('4','f','o','u','r')
//     calcNumber('5','f','i','v','e')
//     calcNumber('6','s','i','x')
//     calcNumber('7','s','e','v','e','n')
//     calcNumber('8','e','i','g','h','t')
//     calcNumber('9','n','i','n','e')
//
//     return ans
// };
//
// console.log(originalDigits('owoztneoer'));
// console.log(originalDigits('"fviefuro"'));
// console.log(originalDigits('oneoneone'));


/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {

    //character : freq
    const map = new Map();
    let ans = '';

    for(let i=0; i<s.length; i++){
        map.set(s[i],( map.has(s[i]) ? map.get(s[i]) : 0) + 1 )
    }

    const calcNumber = function(val, ...char){
        //if arg is given we wanna check it otherwise don't

        //typeof char[0] !== undefined ? map.get(char[0]) : true
            while(true){

                console.log(map)
                //have a base case inside the function, instead of writing everything in the brackets() of while
                //if map.get() is 0 or undefined (falsy value) then break
                for(let i=0; i<char.length; i++){
                    // if(char[i] && !map.get(char[i])) return;
                    if(!map.get(char[i])) return;

                }

                for(let i=0; i<char.length; i++){
                    // if(char[i]) map.set(char[i], map.get(char[i])-1)
                    map.set(char[i], map.get(char[i])-1)
                }

                ans += val;
            }
    }

    calcNumber('0','z','e','r','o')
    calcNumber('1','o','n','e')
    calcNumber('2','t','w','o')
    calcNumber('3','t','h','r','e','e')
    calcNumber('4','f','o','u','r')
    calcNumber('5','f','i','v','e')
    calcNumber('6','s','i','x')
    calcNumber('7','s','e','v','e','n')
    calcNumber('8','e','i','g','h','t')
    calcNumber('9','n','i','n','e')

    return ans
};

console.log(originalDigits('owoztneoer'));
// console.log(originalDigits('"fviefuro"'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// while(true){
//
//     console.log(map)
//     //have a base case inside the function, instead of writing everything in the brackets() of while
//     //if map.get() is 0 or undefined (falsy value) then break
//     if(char[0] && !map.get(char[0])) break;
//     if(char[1] && !map.get(char[1])) break;
//     if(char[2] && !map.get(char[2])) break;
//     if(char[3] && !map.get(char[3])) break;
//     if(char[4] && !map.get(char[4])) break;
//
//     if(char[0]) map.set(char[0], map.get(char[0])-1)
//     if(char[1]) map.set(char[1], map.get(char[1])-1)
//     if(char[2]) map.set(char[2], map.get(char[2])-1)
//     if(char[3]) map.set(char[3], map.get(char[3])-1)
//     if(char[4]) map.set(char[4], map.get(char[4])-1)
//
//     ans += val;
// }

// while( char[0] ? map.get(char[0]) : true && char[1] ? map.get(char[1]) : true
// && char[2] ? map.get(char[2]) : true && char[3] ? map.get(char[3]) : true && char[4] ? map.get(char[4]) : true ){
//
//     console.log(map)
//
//     //have a base case inside the function
//     if(char[0]) map.set(char[0], map.get(char[0])-1)
//     if(char[1]) map.set(char[1], map.get(char[1])-1)
//     if(char[2]) map.set(char[2], map.get(char[2])-1)
//     if(char[3]) map.set(char[3], map.get(char[3])-1)
//     if(char[4]) map.set(char[4], map.get(char[4])-1)
//
//     ans += val;
// }
// return;

//only check non-undefined args
//while freq is !0 || undefined
// while( char[0] ? map.get(char[0]) && char[1] ? map.get(char[1]) && char[2] ? map.get(char[2]) && char[3] ? map.get(char[3]) && char[4] ? map.get(char[4]) ){
//     map.set(char[0], map.get(char[0])-1)
//     map.set(char[1], map.get(char[1])-1)
//     map.set(char[2], map.get(char[2])-1)
//     map.set(char[3], map.get(char[3])-1)
//     map.set(char[4], map.get(char[4])-1)
//
//     ans += val;
// }

//if( map.has('o') && map.has('n') && map.has('e') )

// const calcNumber = function(...char){
//     console.log(char)
//     //while freq is !0 || undefined
//     while(map.get(char[0]) && map.get(char[1]) && map.get(char[2]) && map.get(char[3]) && map.get(char[4]) ){
//         map.set(char[0], map.get('o')-1)
//         map.set('n', map.get('n')-1)
//         map.set('e', map.get('e')-1)
//
//         ans += '1';
//     }
// }


// console.log(map)
// console.log(map)
// console.log(ans)