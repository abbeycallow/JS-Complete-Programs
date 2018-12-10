// Given a string of even length, return the first half. So the string "WooHoo"
// yields "Woo".
// firstHalf("WooHoo") → "Woo"
// firstHalf("HelloThere") → "Hello"
// firstHalf("abcdef") → "abc

// Setup String Variables
var name1 = "HarryJPotter"
var name2 = "SuperCaliFragiListicEspialaDocious"
var name3 = "JavaScriptClass1"
var name4 = "theshortsguyenomarenomar"

// Setup Function to cut string in Half
function firstHalf(string) {
    var string = String.substring(0,String.length / 2)
    console.log(String)
}

// Pass Strings Into Function
firstHalf(name1);
firstHalf(name2);
firstHalf(name3);
firstHalf(name4);