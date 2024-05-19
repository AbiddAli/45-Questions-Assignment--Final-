// Q-44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwiches (item: string[]) {
    console.log('Customize your sandwich with:');

    item.forEach(element => console.log("  " + element));

console.log('Enjoy Your Sandwich !');
}

makeSandwiches(['1-Chicken','2-Cheese','3-Cucumber','4-lettuce']) 

makeSandwiches(['1-Beef Patty','2-Cheese','3-Chilli Sauce','4-Ketchup'])

makeSandwiches(['1-Peanut butter','2-Boiled Egg','3-Cabbage','4-colslow'])


