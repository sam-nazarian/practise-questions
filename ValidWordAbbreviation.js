/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let i = 0;
  let j = 0;

  while (j < abbr.length) {
    if (word[i] === abbr[j]) {
      i++;
      j++;
      continue;
    }

    if (isNaN(abbr[j]) || abbr[j] === '0') {
      //if abbr is string, && doesn't match then
      return false;
    }

    if (!isNaN(abbr[j])) {
      //if abbr is number
      //j is stating value, k is ending value
      let k = j;
      while (k < abbr.length && !isNaN(abbr[k])) {
        k++;
      }
      const between = Number(abbr.slice(j, k));
      j = k;
      i += between;

      continue;
    }
  }
  //problem index goes past length of word, if abbr between number is too large

  //because we said '< abbr.length' the value we get will be length or greater for the for loop to stop
  //must be length if the index++ worked properly
  if (i === word.length && j === abbr.length) {
    return true;
  } else {
    return false;
  }
};

console.log(validWordAbbreviation('internationalization', 'i12iz4n')); //true
console.log(validWordAbbreviation('a', '2')); //false
// console.log(validWordAbbreviation('internationalization', 'i18n')); //true

//this works until test 300. Could make some imporvements
// /**
//  * @param {string} word
//  * @param {string} abbr
//  * @return {boolean}
//  */
// var validWordAbbreviation = function (word, abbr) {
//   let i = 0; //word pointer
//   let j = 0; //abbr pointer

//   // if (abbr.length === 1 && /\d/.test(abbr[0])) {
//   //   return false;
//   // }

//   if (abbr.length === 1 && /\d/.test(abbr[0])) {
//     if (word.length !== Number(abbr[0])) {
//       return false;
//     }
//   }

//   if (word.length === 1 && word[0] == 'a' && abbr[0] == '0' && abbr[1] == '1') return false;

//   while (j < abbr.length) {
//     //if curr char of abbr is number
//     if (/\d/.test(abbr[j])) {
//       //if curr & next elm of abbr are a number
//       if (/\d/.test(abbr[j + 1])) {
//         const number = Number(abbr[j].toString() + abbr[j + 1].toString());

//         i += number;
//         j += 2;
//         continue;
//       }

//       i += Number(abbr[j]);

//       // console.log(word[i]);
//       j++;

//       // if (word[i] === undefined && abbr[j] !== undefined) return false;

//       continue;
//     }

//     if (word[i] !== abbr[j]) {
//       return false;
//     }

//     i++;
//     j++;
//   }

//   return i === word.length && j === abbr.length;
// };

// console.log(validWordAbbreviation('a', '2')); //false
// console.log(validWordAbbreviation('internationalization', 'i5a11o1')); //true
// console.log(validWordAbbreviation('a', '1')); //true
// console.log(validWordAbbreviation('a', '01')); //true
