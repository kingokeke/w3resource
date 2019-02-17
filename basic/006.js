// ###################################################################
//
// QUESTION
// Write a JavaScript program to determine whether a given year is a
// leap year in the Gregorian calendar.
//
// ###################################################################

function isLeapYear(year) {
  if (year % 4 === 0) {
    // If year is divisible by 100, it is not a Leap Year unless it is divisible by 400
    return year % 100 === 0 && year % 400 !== 0 ? 'Not a Leap Year' : 'Leap Year';
  }
}
console.log(isLeapYear(1900)); // Not a Leap Year
console.log(isLeapYear(2000)); // Leap Year
