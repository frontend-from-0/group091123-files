// For loop
const myArray = ['element1', 'element2', 'element3'];
for (let i = 0; i < myArray.length; i++) {
	console.log(myArray[i], 'i is:', i);
}
// while
// do while
// Array.prototype.map function - we'll learn it later

// 1. Write a loop that prints out the numbers from 1 to 10 (not included).
for (let i = 1; i < 10; i++) {
	console.log(i);
}
console.log('- - - - - - - - - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...

for (let i = 1; i < 20; i += 2) {
	console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...

console.log('- - - - - - - - - - - - - - - - - ');
// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [300, 10, 23, 42, 505, 12, 7, 4, 900];
let maxNumberEx4 = findMaxNumberInArray[0];

for (let i = 1; i < findMaxNumberInArray.length; i++) {
	console.log('1', i, maxNumberEx4, findMaxNumberInArray[i]);
	if (maxNumberEx4 < findMaxNumberInArray[i]) {
		console.log('2', i, maxNumberEx4, findMaxNumberInArray[i]);
		maxNumberEx4 = findMaxNumberInArray[i];
		console.log('3', i, maxNumberEx4, findMaxNumberInArray[i]);
	}
}

console.log('- - - - - - - - - - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [1, 10, 23, 42, 0, 12, 7, 0];

console.log('- - - - - - - - - - - - - - - - - ');
// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let reversedString = '';
for (let i = string.length - 1; i >= 0; i--) {
	reversedString = reversedString + string[i];
}

console.log(reversedString);

// 6.a Write a loop that reverses a words in a given sentence.
const wordsInTheSentence = string.split(' ');
let reversedSentence = [];
for (let i = wordsInTheSentence.length - 1; i >= 0; i--) {
	reversedSentence.push(wordsInTheSentence[i]);
}
console.log(reversedSentence.join(' '));

console.log('- - - - - - - - - - - - - - - - - ');

let whileLoopIndex = 0;
while (whileLoopIndex < 5) {
	console.log('Hello');
	whileLoopIndex++;
}

for (let i = 0; i < 6; i++) {
	console.log('Hello');
}
// 7. Write a while loop that counts from 10 to 1 and prints out each number.
let sayi = 10;
while (sayi > 0) {
	console.log(sayi);

	sayi--;
}
console.log('- - - - - - - - - - - - - - - - - ');
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.
let randomNumber = 0;
let count = 0;
while (randomNumber <= 8) {
    count++;
    randomNumber = Math.floor(Math.random() * 10) + 1;
}
console.log(count, 'randomNumber', randomNumber);
console.log('- - - - - - - - - - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.

// The for...in loop in JavaScript is used for iterating over the properties of an object.
// for (variable in object) {
//   // code to be executed for each property
// }

// 10. Write a for...in loop that prints out the keys and values of an object.
const person = { name: 'John', surname: 'Doe', age: 30, city: 'New York' };

for (const key in person) {
  console.log(key, person[key]);
}


// 11. Write a for...in loop that sums the values of an object.
const obj = { a: 10, b: 20, c: 30, d: 23 };
