// we created a code that splices one word and inserts a word in the spliced word. it creates a "sandwhich"

function strSandwhich(word1, word2) {
    if(word1.length > word2.length){

    }
    else {
        var end = word1.length;
  var half = word1.length / 2;
  var slice2 = word1.substring(0,half);
  var slice1 = word1.substring(half, end);
  var sandwhich = slice1 + word2 + slice2;
  console.log(sandwhich);
  return sandwhich;


    }
  var end = word1.length;
  var half = word1.length / 2;
  var slice1 = word1.substring(0,half);
  var slice2 = word1.substring(half, end);
  var sandwhich = slice1 + word2 + slice2;
  console.log(sandwhich);
  return sandwhich;
  
}
strSandwhich("cherry", "apple");
strSandwhich("supercalifrag", "javascript");