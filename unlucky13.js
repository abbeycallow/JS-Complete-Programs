


var numList1 = [1,2,3,4,5,13,6,7,8,9];
var numList2 = [9,7,5,7,54,32,34,13];

checkForThirteen(numList1);
checkForThirteen(numList2);

function checkForThirteen(numlist) {
    var total = 0;
    for (index = 0 ; 0 < numlist.length;index++) {
    if (numlist[index] !== 13) {
        total = total + numlist[index];
    }else {
        break;
    }
   
}
console.log(total);
}

