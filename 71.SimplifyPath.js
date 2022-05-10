/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

    path = path.replace(/\/\//g, '/'); //don't change original obj

    path = path.split(/\//g);
    // console.log(path)

    //instead of removing '' & '.', could just iterate over with for loop, and just ignore the '' & '.'
    for(let i=path.length-1; i>=0; i--){
        if(path[i]==='' || path[i] ==='.') path.splice(i,1);
    }

    console.log(path)

    const arr = [];
    for(let i=0; i<path.length; i++){
        if(path[i] !== '..') arr.push(path[i])
        else arr.pop();
    }

    console.log(arr)


    let str = ''
    for(let i=0; i<arr.length; i++){
        str += '/';
        str += arr[i]
    }
    if(str === '') str += '/';
    console.log(str)
    return str;
    // console.log(path)
};

// simplifyPath("/home/")
// simplifyPath("/home//foo/")
// simplifyPath("/home//foo/../../../")
// simplifyPath("/home//foo/../test")
simplifyPath("/a/./b/../../c/") //c