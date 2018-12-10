    // this program takes two Number Arrays as input, 
    // Then Compares both arrays against one another to 
    // find common values and places them into a New Array


		commonS();

function commonS() {
    var arr1 = ["leslie", "john", "beca", "abbey", "heather", "mary", "josh"];
    var arr2 = ["dan", "bab", "lisa", "tina", "Pat", "josef", "honey"];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                var commonS = arr2[j].match(arr1[i]);
            }
        }
    }
    console.log(commonS)
}
