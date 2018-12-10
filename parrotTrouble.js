// We have a loud talking parrot. The "hour" parameter is the current hour time
	// in the range 0..23. We are in trouble if the parrot is talking and the hour
	// is before 7 or after 20. Return true if we are in trouble.
	// parrotTrouble(true, 6) → true
	// parrotTrouble(true, 7) → false
    // parrotTrouble(false, 6) → false
    
    var isTalking = false;
    var whattime = 12;
    parrotTrouble(true,11)
    parrotTrouble(isTalking,whattime); 
    function parrotTrouble(isParrTalking, time) {
        if (isParrTalking === true && time > 7 || time < 20) {
            console.log(true)
        }
        else if (isParrTalking === false && time ){
            console.log(false)
        }
    }