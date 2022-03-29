/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let i = 0; //word pointer
  let j = 0; //abbr pointer
  while (j < abbr.length) {
    if (/\d/.test(abbr[j])) {
      //if curr char of abbr is number

      if (/\d/.test(abbr[j + 1])) {
        //if curr & next elm of abbr are a number
        const number = Number(abbr[j].toString() + abbr[j + 1].toString());

        console.log(number);
        i += number;
        j += 2;
        continue;
      }

      console.log('BEFORE', word[i + 4], abbr[j]);
      i += Number(abbr[j]);

      console.log('AFTER', word[i]);

      j++;
      continue;
    }

    console.log(word[i], abbr[j]);
    if (word[i] !== abbr[j]) {
      return false;
    }

    i++;
    j++;
  }

  return true;
};

console.log(validWordAbbreviation('internationalization', 'i12iz4n'));
