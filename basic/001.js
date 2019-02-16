// ###################################################################
//
// QUESTION
// Write a JavaScript program to display the current day and time in
// the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
//
// ###################################################################

const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dateTime = new Date();
const day = dateTime.getDay();
const currentTime = dateTime.toLocaleTimeString().split(' ');
const time = currentTime[0].split(':');
const amPm = currentTime[1];
const message = `Today is: ${daysArray[day]}.
Current time is: ${time[0]} ${amPm} : ${time[1]} : ${time[2]}
`;
console.log(message);
