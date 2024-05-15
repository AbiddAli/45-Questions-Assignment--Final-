// Q-21. They think of something you could store in a Typescript Object. Write a program that creates Objects containing these items.

interface items{
Name:string
Price:number 
}

// Make two different objects

let book: items ={
Name: "English",
Price: 500,
}

let car: items={
Name: "Toyota Corolla",
Price: 2500000,
}

console.log(`Book Name: ${book.Name}, Book Price: ${book.Price}`);
console.log(`Car Name: ${car.Name}, Car Price: ${car.Price}`);

