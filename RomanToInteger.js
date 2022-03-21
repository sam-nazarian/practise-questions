/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanToIntRegular = {
    I: 1,
    V: 5,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    CD: 400,
    CM: 900,
    XL: 40,
    XC: 90,
    IV: 4,
    IX: 9,
  };

  const romanArr = s.split('');

  let sum = 0;
  for (let i = 0; i < romanArr.length; i++) {
    const currentElm = romanArr[i];

    if (currentElm === 'C' || currentElm === 'X' || currentElm === 'I') {
      const nextElm = romanArr[i + 1];
      if (nextElm !== 'I' && nextElm) {
        //if roman is special
        const combinedElm = currentElm.toString() + nextElm.toString();
        // console.log(combinedElm)
        const currentValue = romanToIntRegular[combinedElm];
        sum += currentValue;

        // console.log(sum);
        i++;
        continue;
      }

      //else no continue, so nothing happends, goes to code below
    }

    const currentValue = romanToIntRegular[currentElm];

    sum += currentValue;
    console.log(sum);
  }

  return sum;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanToIntRegular = {
    I: 1,
    V: 5,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    CD: 400,
    CM: 900,
    XL: 40,
    XC: 90,
    IV: 4,
    IX: 9,
  };

  const romanArr = s.split('');

  let sum = 0;
  for (let i = 0; i < romanArr.length; i++) {
    const currentElm = romanArr[i];

    if (currentElm === 'C' || currentElm === 'X' || currentElm === 'I') {
      const nextElm = romanArr[i + 1];
      let currentValue = undefined;

      if (nextElm) {
        const combinedElm = currentElm.toString() + nextElm.toString();
        currentValue = romanToIntRegular[combinedElm];
      }

      if (currentValue) {
        //if roman is special
        // console.log(combinedElm)
        sum += currentValue;

        // console.log(sum);
        i++;
        continue;
      }

      //else no continue, so nothing happends, goes to code below
    }

    const currentValue = romanToIntRegular[currentElm];

    sum += currentValue;
    console.log(sum);
  }

  return sum;
};

//WORKS BELOW:
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanToIntRegular = {
    I: 1,
    V: 5,
    L: 50,
    X: 10,
    C: 100,
    D: 500,
    M: 1000,
    CD: 400,
    CM: 900,
    XL: 40,
    XC: 90,
    IV: 4,
    IX: 9,
  };

  const romanArr = s.split('');

  let sum = 0;
  for (let i = 0; i < romanArr.length; i++) {
    const currentElm = romanArr[i];
    let currentValue = undefined;

    if (currentElm === 'C' || currentElm === 'X' || currentElm === 'I') {
      const nextElm = romanArr[i + 1];

      if (nextElm) {
        const combinedElm = currentElm.toString() + nextElm.toString();
        currentValue = romanToIntRegular[combinedElm];
        // console.log(currentValue)
      }

      if (currentValue) {
        //if roman is special
        // console.log(combinedElm)
        sum += currentValue;

        // console.log(sum);
        i++;
        continue;
      }

      //else no continue, so nothing happends, goes to code below
    }

    currentValue = romanToIntRegular[currentElm];

    sum += currentValue;
    // console.log(sum);
  }

  return sum;
};
