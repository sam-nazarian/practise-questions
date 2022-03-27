/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  // console.log(logs);
  const letterLog = [];
  const digitLog = [];

  for (let i = 0; i < logs.length; i++) {
    const secondWord = logs[i].split(' ')[1]; //split() doesn't change original Strings
    const regex = /[A-Za-z]/g;

    if (secondWord.match(regex)) {
      // console.log('letter-log', secondWord);
      letterLog.push(logs[i]);
    } else {
      // console.log('digit-log', secondWord);
      digitLog.push(logs[i]);
    }
  }

  console.log(letterLog, digitLog); // letterLog comes first

  //sort letterLogs lexicgraphicly
  letterLog.sort(function (a, b) {
    function getRaw(string) {
      const firstWord = string.split(' ')[0];
      // console.log(firstWord);
      const afterWordRemoval = string.replace(firstWord, '').trim();
      // const x = string.replace(/^.{05}/g, '').trim(); //try to remove first word not first 5 letters
      // console.log(afterWordRemoval);
      return afterWordRemoval;
    }

    return getRaw(a).localeCompare(getRaw(b));
  });

  const finalArr = [...letterLog, ...digitLog];

  return finalArr;
  // console.log(letterLog);
};

console.log(reorderLogFiles(['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero']));
