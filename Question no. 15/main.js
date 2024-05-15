// Q-15 Changing Guest List : You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guest_list = ["Ibrahim", "Ahmed", "Omar", "Huzaifa"];
var canNotAttend = "Huzaifa";
console.log(canNotAttend + " " + "can not attend the dinner tomorrow!");
var newGuest = "Usman";
guest_list[guest_list.indexOf(canNotAttend)] = newGuest;
console.log(guest_list);
guest_list.map(function (items) { return console.log("Dear ".concat(items, ", You are invited to the dinner!")); });
