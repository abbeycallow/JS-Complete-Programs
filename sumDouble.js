// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

    sumDouble(1,2);
    sumDouble2(1,2);
    sumDouble(2,2);
    sumDouble2(2,2);
    sumDouble(6,7);
    sumDouble2(6,7);
    sumDouble(7,7);
    sumDouble2(7,7);

function sumDouble( firsNum , secondNum ) {
    if(firsNum === secondNum) {
        return 2 * (firsNum + secondNum);
    }
    else {
        return firsNum + secondNum;		
    }
}

function sumDouble2( firsNum , secondNum ) {
    if(firsNum === secondNum) {
        console.log(2 * (firsNum + secondNum));
    }
    else {
        console.log(firsNum + secondNum);		
    }
}
