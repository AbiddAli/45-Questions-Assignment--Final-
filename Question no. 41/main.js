"use strict";
// Q-41: Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
let magician = ['Criss Angel', 'David Blaine', 'Darren Brown', 'David Copperfield', 'Harry Anderson'];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
