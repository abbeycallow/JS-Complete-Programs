
var isFull= false;
var isAwake = true
// all animal methods

function sleep(time) {
    isAwake = false
    console.log((isAwake));
    var howlongToSleep = time;
    for(i=0; i < howlongToSleep; i++){
    console.log("i'm sleeping " + howlongToSleep + "please dont wake me up")
}
console.log("I AM UP AND RESTED");

}




// calling all methods 
sleep(5);

function eat(amount) {
    let amountToEat = amount;
    if(amountToEat > 0) {
      isFull = true;
    }
    console.log("you ate" + amountToEat + "pounds of food" + "R U FULL?" + isFull)
}
eat(6);

function jump(howHigh) {
     console.log("you are jumping " + howHigh + " ft feet " + "really fucking high")
}
jump( 80);

//O = omni C = carni H = Herbi
function herb(){
    console.log("honeyyyyy plants are where it's at")
}
function hunt(type) {
    var fType = type.toLowerCase();
    switch(fType) {
        case "o":
         console.log("it eats plants and animals")
        break
        case "c":
         console.log("girl! you ear meat")
        break
        case "h":
        herb()
        
        break
        default:
        console.log("hunting Season Is Open")
}
}
hunt("o")
hunt("c")
hunt("h")
hunt("l") 


function run(distance) {
    var HowFar = distance;
    console.log("you are running " + HowFar + " miles" )
}

run(300)

// L is = lion , D is = Dog, P is = parakete

function dog(){
    console.log("this animal could be TAME or WILD");
}

function tame(type) {
    var aType=type.toLowerCase();
    switch(aType) {
        case "l":
        console.log("this animal is WILD");
        break

        case "d":
        dog()
        break

        case "p":
        console.log("this animal is TAME");
        break

        default:
        console.log("I dont know if this animal is TAME or WILD");
        

    }
}
tame("l")
tame("d")
tame("p")

function mate(babie) {
    if(babie < 10) {
        console.log("def dont want to get down on the D");
    }
    else(babie >10) 
        console.log("def Want to get down on the D");
    
}
mate(8)
mate(33)



    

