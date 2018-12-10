    // No User input Just write the program 
    // Write a program that sums(adds) all
    // the elements in an int[]


    var numlist1 = [1,2,54,5,6,7,8,8,9];
    var numlist2 = [2,6,3,0,1];
    var numlist3 = [0,0,0,0,3];

    function sumArray(array) {
        for (
          var
            index = 0,              // The iterator
            length = array.length,  // Cache the array length
            sum = 0;                // The total amount
            index < length;         // The "for"-loop condition
            sum += array[index++]   // Add number on each iteration
        );
        console.log(sum);
        return sum;
      } 

      sumArray(numlist1);
      sumArray(numlist2);
      sumArray(numlist3);
