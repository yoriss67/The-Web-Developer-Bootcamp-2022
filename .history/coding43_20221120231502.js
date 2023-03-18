// DEFINE YOUR FUNCTION BELOW:
// const days = [
//     'Monday',
//      'Tuesday', 
//  'Wednesday', 
//      'Thursday', 
//      'Friday', 
//      'Saturday', 
//      'Sunday'
// ]

// function returnDay(num) {
//     if (isNaN(num)) {
//         return 'Enter a number';
//     } else if (num < 1 || num > 7) {
//         return null;
//     } else if (num === 1) {
//         return days[0];
//     } else if (num === 2) {
//         return days[1];
//     } else if (num === 3) {
//         return days[2];
//     } else if (num === 4) {
//         return days[3];
//     } else if (num === 5) {
//         return days[4];
//     } else if (num === 6) {
//         return days[5];
//     } else if (num === 7) {
//         return days[6];
//     }
// }

// Rishi
const days = {
    1: 'Monday',
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}
 
const returnDay = (number) => {
    if(number < 1 || number > 7) {
        return null;
    }
    return (days[number])
}

const days = [
    { 1: 'Monday'},
    { 2: "Tuesday"},
    { 3: "Wednesday"},
    { 4: "Thursday"},
    { 5: "Friday"},
    {6: "Saturday"},
    { 7: "Sunday"}
]