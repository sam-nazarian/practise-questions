// /**
//  * @param {string} s
//  * @return {string}
//  */
// var minRemoveToMakeValid = function(s) {
//     const sArr = s.split('');
//
//     let stack = [];
//     let stackIndex = []
//
//     for(let i=0; i<sArr.length; i++){
//         if(sArr[i] === '(') {
//             stack.push(sArr[i]);
//             stackIndex.push(i);
//         }
//         if(sArr[i] === ')') {
//             //whenever there's nothing exists in stack, then remove that ')' index
//             if(stack.length === 0){
//                 sArr.splice(i, 1);
//                 i--;
//             }
//             stack.pop();
//             stackIndex.pop();
//         }
//
//         console.log('stack', stack)
//         console.log('sArr', sArr)
//     }
//
//
//     console.log(stackIndex)
//     //remove anything remaining in stack
//     for(let i=stackIndex.length-1; i>=0; i--){
//         sArr.splice(stackIndex[i], 1);
//         //after a remove since 1 index was removed every index will be shifted 1 to the left to fit the whole of removed index
//     }
//
//     console.log(sArr.join(''))
//     return sArr.join('')
// };

// minRemoveToMakeValid('lee(t(c)o)de)');
// minRemoveToMakeValid('))((');
// minRemoveToMakeValid("())()(((");



const minRemoveToMakeValid = (str)=> {
    const stack = [];
    const splitted_str = str.split("");
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === "(") stack.push(i); // if curr char is (  then we will push into our stack
        else if (char === ")") {
            if (stack.length === 0) {
                // if out stack is empty then we will make ) as ''
                splitted_str[i] = "";
            } else {
                //! if stack is not empty then we will pop top of the stack
                stack.pop();
            }
        }
    }
    // if we have extra ( bracket we will remove it by making it as ''
    for (let i = 0; i < stack.length; i++) {
        const char = stack[i];
        splitted_str[char] = "";
    }

    console.log(splitted_str.join())

    return splitted_str.join(""); // at last we will join the splitted_str
};


console.log(minRemoveToMakeValid("())()((("))
