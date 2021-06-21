//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protien = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let starch = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let drink = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let fruit= ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

let pantry = [protien, starch, vegetable, drink, fruit];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

function assembleMeal(){
  let meal = [];
  let includesKale = false;
  for(x=0;x<5;x++){
    meal[x] = Math.floor(Math.random()*6);
  }
  if(vegetable[meal[2]].includes("kale")){   //Check if vegtable selection contains kale
      includesKale = true;
  }
  if(fruit[meal[4]].includes("kale")){ //Check if fruit selection contains Kale
      includesKale = true;
  }
  let mealSlip = `Main course: ${protien[meal[0]]} and ${starch[meal[1]]} with ${vegetable[meal[2]]} \nDrink: ${drink[meal[3]]} \nSide: ${fruit[meal[4]]}`;

  let newMeal = "";

  if(includesKale === true){
    newMeal = `${mealSlip} \nDon’t worry, you can have double chocolate tomorrow.`;
  }else{
    newMeal = `${mealSlip}`;
  }
   
  return newMeal; 
}

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
const input = require('readline-sync');
let isNum = false;
let nm = [];
while(isNum == false){
  let mealCount = input.question("Select the number of meals to assemble. Enter number between 1-6\n");
  if(Number(mealCount) != 'NaN'){
    if(Number(mealCount) > 0 && Number(mealCount) < 7){
      let bc = 0;
      console.log(4);
      while (bc < Number(mealCount)){
        console.log(`Course ${bc+1}: ${assembleMeal()}\n`);
        bc++;
      }
      break;  //break while loop when number is validated and meals are printed 
    } 
  }
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”