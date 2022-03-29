/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const [day, month, year] = date.split(' ');

  /** @type {string[]} */
  const dateArrYMD = [];

  const months = {
    Jan: '1',
    Feb: '2',
    Mar: '3',
    Apr: '4',
    May: '5',
    Jun: '6',
    Jul: '7',
    Aug: '8',
    Sep: '9',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  dateArrYMD[0] = year; //setting year
  dateArrYMD[1] = months[month]; //setting month
  dateArrYMD[2] = day.replace(/st|nd|rd|th/, ''); //setting day , replace('th', '')

  // console.log(dateArrYMD[1].length, dateArrYMD[2].length);
  if (dateArrYMD[1].length < 2) dateArrYMD[1] = '0' + dateArrYMD[1];
  if (dateArrYMD[2].length < 2) dateArrYMD[2] = '0' + dateArrYMD[2];

  const finalFormattedDate = dateArrYMD.join('-');

  return finalFormattedDate;
};

console.log(reformatDate('20th Oct 2052'));
console.log(reformatDate('6th Jun 1933'));
console.log(reformatDate('22nd Apr 2023'));

//works but could imporove by using array destruction
// /**
//  * @param {string} date
//  * @return {string}
//  */
// var reformatDate = function (date) {
//   const dateArrDMY = date.split(' ');

//   /** @type {string[]} */
//   const dateArrYMD = [];

//   const months = {
//     Jan: '1',
//     Feb: '2',
//     Mar: '3',
//     Apr: '4',
//     May: '5',
//     Jun: '6',
//     Jul: '7',
//     Aug: '8',
//     Sep: '9',
//     Oct: '10',
//     Nov: '11',
//     Dec: '12',
//   };

//   dateArrYMD[0] = dateArrDMY[2]; //setting year
//   dateArrYMD[1] = months[dateArrDMY[1]]; //setting month
//   dateArrYMD[2] = dateArrDMY[0].slice('').replace(/st|nd|rd|th/, ''); //setting day , replace('th', '')

//   // console.log(dateArrYMD[1].length, dateArrYMD[2].length);
//   if (dateArrYMD[1].length < 2) dateArrYMD[1] = '0' + dateArrYMD[1];
//   if (dateArrYMD[2].length < 2) dateArrYMD[2] = '0' + dateArrYMD[2];

//   const finalFormattedDate = dateArrYMD.join('-');

//   return finalFormattedDate;
// };

// console.log(reformatDate('20th Oct 2052'));
// console.log(reformatDate('6th Jun 1933'));
// console.log(reformatDate('22nd Apr 2023'));
