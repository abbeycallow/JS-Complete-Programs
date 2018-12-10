    // Write a JavaScript program that takes a String
	// Converts the string to all lowercase letters
    // Then checks the String for vowel's.
    // If there are any , Keep Track By Using a Vowel Counter. 


    var str1 = "Hello Mr. Davis I would retake That All over again";
    var str2 = "Ramone Hamlett"
    var str3 = "Helllooo Mr. Roger";
    var res1 = str1.toLowerCase();
    var res2 = str2.toLowerCase();
    var res3 = str3.toLowerCase();

    vowelCounting(res1);
    vowelCounting(res2);
    vowelCounting(res3);

function vowelCounting(String) {
    var vowelCount = 0;
    for (var i = 0; i < String.length; i++) {
        if (String.charAt(i) == 'a'
            || String.charAt(i) == 'e'
            || String.charAt(i) == 'i'
            || String.charAt(i) == 'o'
            || String.charAt(i) == 'u') {
            vowelCount++;
        }
    }
    
    console.log(vowelCount)
}
