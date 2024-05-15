// Q-17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Initialized guest list
var guest_list = ["Ibrahim", "Ahmed", "Omar", "Huzaifa"];
// Inform guest to change the dinner table
console.log("Unfortunately due to limited space only two guest are invited for dinner!");
// Remove Guest from list.
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Dear ".concat(remove_guest, " regret to inform you that we can not invite you to dinner!"));
}
// Remaining guest Invitation
guest_list.forEach(function (guest_list) {
    console.log("Dear ".concat(guest_list, " I would like to inform you that you are still invited to the dinner!"));
});
// Empty List
guest_list.splice(0, guest_list.length);
console.log(guest_list);
