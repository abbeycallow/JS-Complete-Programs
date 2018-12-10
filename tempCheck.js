// Given two temperatures, return true if one is less than 0 and the other is
	// greater than 100.
	// icyHot(120, -1) → true
	// icyHot(-1, 120) → true
	// icyHot(2, 120) → false

    var temp1 = -1;
    var temp2 = 110;
    var temp3 = -23;
    var temp4 = 88;

    var isIcyHot = icyHotTempCheck(temp1,temp4);
    var isIcyHot2 = icyHotTempCheck(temp3, temp2);
    var isIcyHot3 = icyHotTempCheck(temp1,temp3);
    var isIcyHot4 = icyHotTempCheck(temp1,temp2);

    function icyHotTempCheck(temperature1, temperature2) {
        if (temperature1 < 0 && temperature2 > 100 || temperature1 > 100 && temperature2 < 0) {
            return true;
        }else {
            return false;
        }
    }

    console.log(isIcyHot);
    console.log(isIcyHot2);
    console.log(isIcyHot3);
    console.log(isIcyHot4);
