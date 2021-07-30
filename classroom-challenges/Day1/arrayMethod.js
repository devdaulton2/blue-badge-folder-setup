/*
    - ARRAY METHODS
*/
//Array methods allow us to manipulare elements in an array.
//They allow us to combine, remove, add, update, and reverse elements.

//Join Method
/*
    the join method allows us to concentrate all of the elements in the array. It creates and then returns a sttring using a seperator
    NOTE: a seperator can be anything!
*/

let sailorMoon = ["Sailor Venus", "Sailor Mars", "Sailor Moon"];
console.log(sailorMoon.join(" AND "));

//Reverse Method
/*
    the reverse method reverses the order of the elements in an array. It sorts in descending order
*/

let numbers = [1, 2, 3];
console.log(numbers.reverse());

//Split Method
/*
    Splits an element into multiple elements and returns an array. NOTE: it does not change the original array. 
*/

let string = "Sailor moon is one of my favorite cartoons";

//splitting by whitespace
let stringWords = string.split(" ");
console.log(stringWords);

let stringChar = string.split("");
console.log(stringChar[8]);

fullName = "Aryn Daulton";
partName = fullName.split(" ", 1);
console.log(partName);

//Replace Method
/*
    used to search for a certain string and replace it with another.
    NOTE: string.replace("old/to be replaced", "new/replace with")
*/

let wrong = "Who's monitor is this?";

let correct = wrong.replace("Who's", "Whose");
console.log(correct);

let string2 = "I am great";
let stringNew = string2.replace(/great/gi, "awesome sauce");

// g = global and i = case insensitive.

console.log(stringNew);

// Splice Method
/*
    We use the splice method when we want to delete a cetain element and/or replace them with other elements that we create.
*/

let darkSide = ['Darth Vader', 'Darth Plagueis', 'Emperor Palpatine', 'Count Dooku', 'General Greivous', 'Kylo Ren', 'Darth Maul'];
let removed = darkSide.splice(2, 4, "Darth Sidious", "Dark Tarynus");
console.log(darkSide);

//Map Method
/*
    Used to update all the elements in an array based on a function you create.
    NOTE: This method does NOT create a new array.
    */

let theOffice = [
    {firstname : "Jim", lastname: "Halpert"},
    {firstname : "Michael", lastname: "Scott"},
    {firstname : "Pam", lastname: "Beesley"}
];

let charsName = theOffice.map(function(name) {
    return [name.firstname, name.lastname].join(" ");
})

console.log(charsName);
console.log(theOffice);

//IndexOf Method
/*
    Used to determine where an element is in an array 
*/

let alphabet = "a b c d e f g h i j k l m n o p q r s t u v  w x y z";
let alphaB = alphabet.split(" ").indexOf("b");

alphaB += 1;
console.log(alphaB);

//Filter Method
/*
    Used to filter out certian elements. Returns a va;ue of true or false.
*/

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers2.filter(function(item) {
    if(item % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log(even);

//Every Method
/*
    Use this method if you want to check if every element in the array passes a condition. Returns true or false.
*/

let ages = [34, 27, 43, 22, 66];
let over18 = ages.every(function(element) {
    return element > 18;
});
console.log(over18);