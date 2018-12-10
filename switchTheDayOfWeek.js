// Write a program that takes a number as 
// input and returns the day of week 
// corrosponding with that number

var dayOfTheWeek1 = 3;
var dayOfTheWeek2 = 5;
var dayOfTheWeek3 = 2;

whatDayIsIt(dayOfTheWeek1);
whatDayIsIt(dayOfTheWeek2);
whatDayIsIt(dayOfTheWeek3);

function whatDayIsIt(day) {
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
        break;
    }
}