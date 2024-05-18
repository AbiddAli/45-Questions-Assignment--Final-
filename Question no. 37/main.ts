// Q-37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirt(size: string = "Large", text: string = "I Love Programming!") {
    console.log(`${size}, T-shirt with message: ${text}`);
}

make_shirt();

make_shirt('Medium', 'Make it work, make it right, make it fast.');

make_shirt('Small', 'First,solve the problem.');

