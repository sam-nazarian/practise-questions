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
      //if char of abbr is number

      console.log('number');

      i += abbr[j];
      //compare them then go to next iteration of while

      if (word[i] !== abbr[j]) {
        return false;
      }

      j++;
      i++;

      continue;
    }

    if (word[i] !== abbr[j]) {
      return false;
    }

    console.log('test');

    i++;
    j++;
  }

  return true;
};

console.log(validWordAbbreviation('internationalization', 'i12iz4n'));
