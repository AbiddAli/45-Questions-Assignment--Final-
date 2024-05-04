// Q-3	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and title case.

let personName: string = "Abid Ali";

// Lower Case    
console.log("Lowercase:", personName.toLowerCase());

// Upper Case
console.log("Uppercase:", personName.toUpperCase());

// Title Case
console.log("Titlecase:", personName.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));
