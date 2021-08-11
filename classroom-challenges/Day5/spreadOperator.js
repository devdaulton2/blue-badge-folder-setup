/*

    -Spread Operator
        -The spread operator pulls out all elements in an array and gives them back to you as a standalone list of elements.
        - It takes an iterable object and/or objects and expands it into individual elements. The spread operator is typically used to make copies of an array/object.
        -Denoted by the ellipsis(...)
*/

let students = ["Jake Green", "Stephanie Falls"];
//wrong syntax
//"students"

let copiedStudents = [...students]; 
//let copiedStudents = [students] //not the same as a spread operator
console.log(copiedStudents, "Line 14")
students.push("Leslie Phillips");
console.log(students, copiedStudents, "Line 17");

const persons = [
    {name: "Taylor", age: 300},
    {name: "Ryan", age: 25}
];

copiedPersons = [...persons];

persons.push({name: "Quinn", age: 24});
console.log(persons, copiedPersons);

//MATH
console.log(Math.min(1, 5, -3));
let prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices)); //NaN - an array is not a number
console.log(Math.min(...prices)); //gives back a list of standalone elements

//CONCATENATE ARRAYS    
let sent1  [1,2,3,4];
let sent2 = [4,6,7,8];
let concat = [...sent1, ...sent2];
console.log(concat);

let sentence = ["Oh hi mark", false, 2];

function sent(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

sent(...sentence);

//copy an object
let obj = {a: 1, b: 2, c: 2 };
copyObj = {...obj};

console.log(copyObj, obj);

//MERGE OBJECTS
let obj1 = {a:1, b:2, c:3};
let obj2 = {d: 4, e:5, f: 6};

let merge = {...obj1, ...obj2};
console.log(merge);