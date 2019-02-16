// ###################################################################
//
// QUESTION
// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
//
// ###################################################################

const today = new Date();
const [day, month, year] = [today.getDate(), today.getMonth() + 1, today.getFullYear()].map(x => (x < 10 ? '0' + String(x) : String(x)));
console.log(`${month}-${day}-${year}`);
