// Given 2 ints, a and b, return true if one if them is 10 or if their sum is
	// 10.
	// makes10(9, 10) → true
	// makes10(9, 9) → false
    // makes10(1, 9) → true

    var nextNum1 = 5;
    var nextNum2 = 6;
    var nextNum3 = 4;
    var nextNum4 = 9;
    var nextNum5 = 10;

    function checkIfTenOrSum(Number1, Number2) {

        if (Number1 === 10 || Number2 === 10 || Number1 + Number2 === 10) {
            console.log(true);
        }else {
            console.log(false);
        }

    }

    checkIfTenOrSum(nextNum1, nextNum1);
    checkIfTenOrSum(nextNum2, nextNum3);
    checkIfTenOrSum(nextNum5, nextNum1);
    checkIfTenOrSum(nextNum4, nextNum2);
    checkIfTenOrSum(nextNum5, nextNum5);