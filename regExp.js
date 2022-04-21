// /**
//  * @param {string} text
//  */
// const newText = function(text){
//
//     //if anything is matched it will return true
//     /*
//     const is3Digits = /^\d{3}$/g.test(text);
//     console.log(is3Digits);
//
//     const matched = text.match(/^\d{3}$/g);
//     console.log(matched)
//      */
//
//     // const matched2 = text.match(/\b[a-z]+\b/gi);
//     // console.log(matched2)
//
//     // const matched3 = text.match(/(?<areaCode>\d{3})[-.](\d{4})/) //can only get groups if there's no 'g' flag
//     // console.log(matched3)
//     // console.log(matched3.groups.areaCode)
//
//     const r = /(\d{3})[-.](\d{4})/g; //r stands for RegExp
//
//     // let res = r.exec(text); //goes to null, then comes back
//     // while(res !== null){
//     //     console.log(res)
//     //     res = r.exec(text);
//     // }
//
//     let res;
//     while(res = r.exec(text)){ //can't set vars inside while, i.e can't do while(let i= r.exec(text))
//         console.log(res)
//     }
// }
//
// const s = 'Here is are two numbers 111-2222 and 444-5555';
// newText(s);


/**
 * @param {string} text
 * @return {void}
 */
const newText = function(text){
    const x = text.split(/([.?!])\s/); //if you capture ,you will the thing that you are removing in a separate arr, if nothing is removed then there's no array for it
    // x.pop();
    console.log(x)

    const r = /\+(\d+)[.-](\d{3})[.-](\d{3})[.-](\d{4})/g;

    //everytime there's a match we replace it
    const newText = text.replace(r, (match, areaCode, part1, part2, part3) => {
        // if(match.length === 4){
        //     return match.toUpperCase();
        // }
        // return match

        // console.log(arguments)
        const phoneNumberDashes = `${part1}-${part2}-${part3}`;

        if(areaCode === '1') return `American Number: ${phoneNumberDashes}`;
        if(areaCode === '52') return `Mexican Number:  ${phoneNumberDashes}`
    });

    console.log(newText)
}

newText('A rainbow is a meteorological phenomenon that is caused by reflection with the phone number of +1-413-882-2354, refraction and dispersion of light in water droplets +52.531.432.4444 resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.');