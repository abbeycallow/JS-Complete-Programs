// this function creates "hummus"

// this first piece of code starts the app
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };



var hummus1 = {
    make : function create(){
             hummus(1);
    },
    eat : function(){
        console.log("i'm eating my hummus");
        hummus1.destroy;

    },
    destroy : function(){
              console.log("i ate all of my hummus");
    }

}
console.log(hummus1.make());