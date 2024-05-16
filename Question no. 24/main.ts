//  Q-24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators.
// • Test whether an item is in a array.
// • Test whether an item is not in a array.


// More conditional test

// Equality and Inequality Test
console.log("Equality test in string:","Apple" === "Apple" );
console.log("inequality test in string:","Apple" != "Apple" );

// Test using the lower case function
console.log("Lower case function test:", "HELLO".toLowerCase() === "hello");
console.log("Lower case function test:", "HELLO".toLowerCase() != "hello");

// Numerical tests involving equality and inequality
console.log("Equality test with number: ", 22 === 22 );
console.log("Inequality test with number: ", 22 != 22 );

// Numerical tests Greater than and less than
console.log("Greater than test: ", 12 > 11);
console.log("Less than test: ", 12 < 11);

// Greater than or equal to
console.log("Greater than or equal to test: ", 50 >= 45);

// Less than or equal to
console.log("Less than or equal to test: ", 50 <= 45);

//Test using "and" Operator
console.log("And operator test: ", 4===4 && 7 > 4);

//Test using "or" Operator
console.log("Or Operator test: ", 6 > 7 || 6 < 5);

// Test whether an item is in a array
const items: string [] = ["table","chair","fan","Wall-clock"];
console.log('Items in the array: ', items.includes("table"));

// Test Whether an item is not in a array
console.log('Items is not in the array: ', items.includes("fridge"));


