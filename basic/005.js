// ###################################################################
//
// QUESTION
// Write a JavaScript program to rotate the string 'w3resource' in
// right direction by periodically removing one letter from the end
// of the string and attaching it to the front.
//
// ###################################################################

const string = 'w3resource';
const myArray = [...string];
setInterval(() => {
  myArray.unshift(myArray.pop());
  console.log(myArray.join(''));
}, 100);
