// Q-15 Changing Guest List : You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let guest_list: string [] = ["Ibrahim", "Ahmed", "Omar", "Huzaifa"];
let canNotAttend : string = "Huzaifa";

console.log(canNotAttend + " " +"can not attend the dinner tomorrow!");

let newGuest: string = "Usman";

guest_list [guest_list.indexOf(canNotAttend)] = newGuest;

console.log(guest_list);

guest_list.map((items) => console.log(`Dear ${items}, You are invited to the dinner!`))


