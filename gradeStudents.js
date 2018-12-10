// Write a Program that Grades Students Class Work

function gradeStudents(n) {
    if (n >= 50 && n < 60) {
        console.log(n + " Is Enough For A 'F' congradulations")
    }
    else if (n >= 60 && n < 70) {
        console.log(n + " Is Enough For A 'D' congradulations")
    }
    else if (n >= 70 && n < 80) {
        console.log(n + " Is Enough For A 'C' congradulations")
    }
    else if (n >= 80 && n < 90) {
        console.log(n + " Is Enough For A 'B' congradulations")
    }
    else if (n >= 90 && n < 100) {
        console.log(n + " Is Enough For A 'A' congradulations")
    }
    else { console.log("seriously ?? with a score of  " + n + "  you didnt get a passing grade Go Back To Sleep")}
}

    gradeStudents(88);
    gradeStudents(96);
    gradeStudents(15);