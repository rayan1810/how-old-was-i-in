// const arrayRangeGenerator = (start, end) => {
//   const array = [];
//   for (let i = start; i <= end; i++) {
//     array.push(i);
//   }
//   return array;
// };

// const getDayFromDate = (date, month, year) => {
//   const dobDate = new Date(year, month - 1, date);
//   console.log(getAge(dobDate, new Date()));
//   return dobDate.getDay();
// };

export const getAge = (dateOfBirth, currentDate) => {
  var ageInMilliseconds = currentDate - dateOfBirth;
  return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years.
};
