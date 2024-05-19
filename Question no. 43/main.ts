// Q-43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicians:string[]=['Criss Angel','David Blaine','Darren Brown','David Copperfield','Harry Anderson'];

function copyArray(arr:string[]){
return[...arr]
}
function make_great(magiciansArray:string[]){
for (let i=0;i<magiciansArray.length;i++){
    magiciansArray[i]='The Great '+ magiciansArray[i]
}}

function show_magicians(magicians:string[]){
magicians.forEach(Element =>{
console.log(Element);
});
}

const copyMagicianArray=copyArray(magicians)
make_great(copyMagicianArray);

console.log('\n\nThis is my Original Array');
show_magicians(magicians);

console.log('\n\nThis is my Modified Array.');
show_magicians(copyMagicianArray);
