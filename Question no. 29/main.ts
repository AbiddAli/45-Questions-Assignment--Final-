// Q-29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_fruits: string [] = ['Grapes','Mango','Apple'];

if(favourite_fruits.includes('Grapes')){
    console.log('I really like Grapes')
}
if(favourite_fruits.includes('Mango')){
    console.log('I really like Mango')
}
if(favourite_fruits.includes('Apple')){
    console.log('I really like Apple')
}
if(favourite_fruits.includes('Orange')){
    console.log('I really like Orange')
}
if(favourite_fruits.includes('Banana')){
    console.log('I really like Banana')
}
else{
    console.log('Please select the listed fruits');
}