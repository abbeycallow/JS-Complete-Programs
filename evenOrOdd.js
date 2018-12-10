/* Write A JavaScript Program That 
 * Checks Wether A Number Is Even Or Odd
 * 
 * @ Tip * - Is number Modulus 2 (i.e remainder 0)
 */


 // Pass Integer's through your function.
    evenOdd(10);
    evenOdd(5);
    evenOdd(9);
    evenOdd(11);
    evenOdd(222);
    evenOdd(4);

 function evenOdd(integer) {
     // If a Number Is divisable by 2 It's EVEN.
               // Always use Precise Equals 
     if (integer % 2 === 0 ) {
         console.log("The Number : " + integer + " is even")
     }
     else {
     // If a number Is NOT divisable by 2 It's ODD.
         console.log("the number : " + integer + " is odd")
     }
 }
