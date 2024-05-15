var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesVisit = ["Pakistan", "Australia", "Turkey", "America", "China"];
// Print the array in its original order.
console.log("Original Order:", placesVisit);
// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", __spreadArray([], placesVisit, true).sort());
// Show that your array is still in its original order by printing it.
console.log("Original Order After Sorting:", placesVisit);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:", __spreadArray([], placesVisit, true).sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Order has changed:", __spreadArray([], placesVisit, true).reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original Order after reversed order:", placesVisit);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Order has been changed:", __spreadArray([], placesVisit, true).sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Sorted in Reverse Alphabetical Order:", __spreadArray([], placesVisit, true).sort().reverse());
