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
      const afterWordRemoval = string.replace(firstWord, '').trim();

      // console.log(afterWordRemoval);
      return afterWordRemoval;
    }

    const getRawComparison = getRaw(a).localeCompare(getRaw(b));
    if (getRawComparison !== 0) {
      return getRawComparison;
    } else {
      return a.localeCompare(b);
    }

    /*
    //if a-b -1
    if (getRaw(a) < getRaw(b)) {
      return -1; //happends 1st
    } else if (getRaw(a) > getRaw(b)) {
      return 1; //happeneds 2nd
    } else {
      //do comparision with just a&b, don't use getRaw()
      return a.localeCompare(b); //a happened first, then b
    }
    */

    // return getRaw(a).localeCompare(getRaw(b));
  });

  const finalArr = [...letterLog, ...digitLog];

  return finalArr;
  // console.log(letterLog);
};

console.log(reorderLogFiles(['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo', 'a2 act car']));
