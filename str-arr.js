// string practice
const myString = "Hello, World!";
console.log(myString);

const myArray = ["Apple", "Banana", "Cherry"];
console.log(myArray);

// len of string
function stringLength(str) {
  return str.length;
}
console.log(stringLength(myString)); // Output: 13

// arr length
function arrayLength(arr) {
  return arr.length;
}
console.log(arrayLength(myArray)); // Output: 3

// concatenate two strings
function concatStrings(str1, str2) {
    return str1 + str2;
    }
console.log(concatStrings("tharun","reddy")); // Output: "tharunreddy"
// concatenate two arrays
function joinArray(arr) {
    return arr.join(' ');
    }
console.log(joinArray(myArray)); // Output: "Apple Banana Cherry"

// stirng revres
function reverseString(str) {
    return str.split('').reverse().join('');
    }
console.log(reverseString(myString));

// max element using function
let num_arr=[1,5,2,9,3];
function findMax(arr){
    let maxi=0;
    for(let i=0;i<arr.length;i++){
        if (arr[i]>maxi){
            maxi=arr[i];
        }
    }
    return maxi;
}
console.log(findMax(num_arr)); // Output: 9
/// before arrow fun
const arrowfunc= function(a,b){
    return a+b;
}
// after arrow fun
const arrowfunc1=(a,b)=> a*b;
console.log(arrowfunc(2,3)); // Output: 5
console.log(arrowfunc1(2,3)); // Output: 6
// Create an Object
const person = {
    firstName: "tharun",
    lastName: "reddy",
    id: 1001,
    getId: function() {
      return this.id;
    }
  };
  
  let number = person.getId();
  console.log(number); // Output: 1001


  let text1 = "";
for (let x in person) {
  text1 += person[x] + " ";
};
console.log(text1); //  here o/p is "tharun reddy 1001 function() { return this.id; } " 

const fruits = {Bananas:300, Oranges:200, Apples:500}; 

let text2 = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text2 += fruit + ": " + amount +"\n";
}
console.log(text2); 



//js object constructors
function Person(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
  }

  const person1 = new Person("tharun", "reddy", 1001);
    console.log(person1.firstName+person1.lastName+person1.id); // Output: "tharunreddy1001"