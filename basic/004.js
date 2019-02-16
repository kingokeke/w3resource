// ###################################################################
//
// QUESTION
// Write a JavaScript program to find the area of a triangle where
// lengths of the three of its sides are 5, 6, 7
//
// ###################################################################

const sideA = 5;
const sideB = 6;
const sideC = 7;
const s = (sideA + sideB + sideC) / 2;
const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
console.log(area);
