/* for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
    this was a bad piece of code
  } */
  function odd(){
    var currentNumber = Number(prompt("enter a number"));
    document.getElementById("num").innerHTML = currentNumber;
      // if a number is divisable by 2 its even.
      // if a number is not devisable by 2 its odd.
      // always use precise equals "==="
      if(currentNumber % 2 === 0){
      var msg = "theNumber:" + currentNumber + "itsEven"
      document.getElementById("result").innerHTML = msg; 
      }
      else{

        var msg2 = "theNumber:" + currentNumber + "itsOdd";
        document.getElementById("result").innerHTML = msg2;
        
      }
    }
    // start your engines
    