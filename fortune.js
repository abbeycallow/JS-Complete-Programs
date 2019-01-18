function fortune(){
    //var fortuneNum = prompt("Enter A Number 1-5");
    var jt = ["zoo keeper", "cop", "astro", "witch","chef"];
    var gl = ["moon", "houseboat","car", "townhouse","trashcan"];
    var pn = ["dan", "carl", "steph", "jimE", "doug"];
    var k = [3,5,12,7,12];
    var rN1 = Math.floor(Math.random() * 5); 
    var rN2 = Math.floor(Math.random() * 5);

    console.log(" you will be a " + jt[rN1] + " in a " + gl[rN2] + " married to " + pn[rN2] + " with " + k[rN1] + " kids.")


}
fortune();

