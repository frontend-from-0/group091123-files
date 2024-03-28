// [1, 'apple', true, null]
const address = {
  line1: 'Kungstorget 1',
  line2: null,
  city: 'Gothenburg',
  postalCode: '411 17',
  country: 'Sweden'
}; 

console.log(address.country);

// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10
const integersEx1 = [1, 2, 3, 4];
const integersEx1V2 = [10, 2, 30, 4];

function getSumOfArray (numbers) {
  // check if numbers is actually an array and only contains numbers
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

console.log("Exercise 1: ", getSumOfArray(integersEx1V2), getSumOfArray(integersEx1), getSumOfArray([10, 10, 10]));
console.log('----------------------------');
// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5
const integersEx2 = [1, 2, 3, 4];

 function getAvarege (numbers) {
  return getSumOfArray(numbers) / numbers.length;
 }

console.log("Exercise 2:", getAvarege(integersEx2));
console.log('----------------------------');
// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World !"

let stringE3 = ["Hello", "World", "!"];


console.log("Exercise 3:");

console.log('----------------------------');
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 3, 7]
let arrayEx = [1, 2, 3, 4, 7, 10];

console.log("Ex4" );
console.log('----------------------------');
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]
const testArrayEx5 = [1, 2, 3, 4, 7, 10];


console.log('Exercise 5: ');
console.log('----------------------------');
// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]
const testArrayEx6 = [1, 2, 3, 4, 2];

/*
1. write a function with array and values as 2 parameters
2. create placeholder variable to store new array
3. loop through every values of array
4. use if / else condition to find if current value is equal to the value param
5. return the result
*/
function removeValueFromArray(array, valueToRemove){
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    console.log(i, array[i], valueToRemove);
    if (array[i] !== valueToRemove){
      console.log('inside if statemnt', i, array[i], valueToRemove);
      newArray.push(array[i]); 
      // 'a' !== 'b' => ['a']
      // 'b' === 'b' => ['a']
      // 'c' !== 'b' => ['a', 'c']
    }
  }

  return newArray;
}

console.log("exercise 6:",removeValueFromArray(testArrayEx6, 3), removeValueFromArray(['a', 'b', 'c'], 'b'));
console.log('----------------------------');
// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]
const testObjEx7 = {name: "John", age: 30, city: "New York", isStudent: false};
console.log(Object.keys(testObjEx7));

console.log("exercise 7:");
console.log('----------------------------');
// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]
const testObjEx8 = {name: "John", age: 30, city: "New York"};

console.log("exercise 8:", Object.values(testObjEx8));
console.log('----------------------------');
// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false
const testObjEx9 = {name: "John", age: 30, city: "New York", number: undefined};

function ex9 (object, key) {
  console.log(object[key]);
}

ex9(testObjEx9, 'age');
ex9(testObjEx9, 'number');


console.log("Ex 9:");

console.log('----------------------------');
// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}
const testObjEx10 = {name: "John", age: 30};


console.log('----------------------------');
// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}
const testObjEx11 = {name: "John", age: 30, city: "New York"};


console.log('----------------------------');
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}
const array1Ex12 = ["name", "age", "city"];
const array2Ex12 = ["John", 30, "New York"];