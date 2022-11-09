/*
In this assignment, students are tasked with implementing a calculateTotal function. 
This function should receive two parameters (items and tax) and return a number representing the total cost of all the items including the tax on all items which are taxable.
The items parameter is of type array which contains item objects. 
Each item object has two keys: price and taxable. 
The first key, price, is of type number which represents the price of the item. 
The second key, taxable, is of type boolean denoting whether the item is a taxable or non-taxable item respectively.
The tax parameter is of type number which represents the tax percentage which should be applied to each taxable item. 
The value of tax must be a positive number between zero and one. 
If a negative value is passed in as the tax parameter then the absolute value of that number should be used instead.
Students are given a simple skeleton with a method signature for calculateTotal and are expected to implement the method. 
All code should be written within the scope of the provided function. After cloning the assignment students need to run the npm install command to install all packages needed to run the included tests. 
In order to run the included tests students should use the npm test command.

*/

export function calculateTotal(items, tax) {
  let total = 0;
  items.forEach((item) => {
    if (item.taxable) {
      total += item.price * (Math.abs(tax) + 1);
    } else {
      total += item.price;
    }
  });

  return total;
}
