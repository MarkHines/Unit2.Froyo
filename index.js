const userFroyoInput = prompt("Please enter your favorite froyo flavors, separated by a comma. Note: Enter the flavor multiple times depending on how much you like it.",
  `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

const flavorsArray = userFroyoInput.split(`,`);

let flavorsOrdered = {};

const getFlavorsOrdered = (arrayOfFlavors) => {
  for (const flavor of flavorsArray) {
    flavorsOrdered[flavor] = (flavorsOrdered[flavor] || 0) + 1;
  } return flavorsOrdered;
}
console.log(getFlavorsOrdered(userFroyoInput));



// Prompt user to input fav froyo separated by comma (returns a string)
// console.log(typeof userFroyoInput);
// Convert the user input into an array
// console.log(flavors);
// Create an object to track flavors and count
/* Create a function that take in an array of flavors, for each flavor in the array
    the function checks if flavor is in the array and adds 1 to the counter. 
    Found online: obj[key] = (obj[key] || 0) + 1; */
// Return an object of the flavors as keys and the count as the value.
// Test function

