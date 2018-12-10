
//Given 2 strings, return their concatenation, except omit the first char of each. 
//The strings will be at least length 1.
//nonStart("Hello", "There") → "ellohere"
//nonStart("java", "code") → "avaode"
//nonStart("shotl", "java") → "hotlava


omitsFirst("Ramone", "Hamlett")

function omitsFirst(string1,string2) {
    string3 = string1.substring(1) + string2.substring(1);
    console.log(string3);
}