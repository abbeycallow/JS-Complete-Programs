// Given 2 int values, return true if one is negative and one is positive.
// Except if the parameter "negative" is true, then return true only if both are
// negative.
// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

posNeg(-1, -1, true);
posNeg(-1, 2, false);
posNeg(5, 8, true);
posNeg(-1, -1, true);
posNeg(1, 2, true);
posNeg(5, -8, false);


function posNeg( number1,number2 , isNegative) {
    if (isNegative) {
        console.log(number1 < 0 && number2 < 0 );
    }
    else {
        console.log(( number1 < 0 && number2 > 0) || (number1 > 0 && number2 < 0));
    }
}

