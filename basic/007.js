// ###################################################################
//
// QUESTION
// Write a JavaScript program to find 1st January is being a Sunday
// between 2014 and 2050.
//
// ###################################################################

function firstSunday(startYear, endYear) {
  for (let year = startYear; year <= endYear; year++) {
    const date = new Date(`${year}`);
    if (date.getDay() === 0) return date.toDateString();
  }
}
console.log(firstSunday(2014, 2050));
