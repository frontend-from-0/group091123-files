//Example
// function doSomething(parameter) {
//   // base condition for recursive function
//   if (condition) {
//     return value;
//   } else {
//     // If condition is not met, we modify parameter is some way
//     // Usually, after modification, we call the same function again (or the function calls itself)
//     return doSomething(modifiedParameter);
//   }
// }

// Factorial of 5 is 5*4*3*2*1
function getFactorial(number) {
	if (number < 0 || typeof number !== 'number') {
		console.log('Please provide a number >= 0');
		return;
	} else {
		if (number === 0) {
			return 1;
		} else {
			return number * getFactorial(number - 1);
		}
	}
}
getFactorial(5);
/* 
// getFactorial(5)
  5 * getFactorial(4)
  5 * 4 * getFactorial(3)
  5 * 4 * 3 * getFactorial(2)
  5 * 4 * 3 * 2 * getFactorial(1)
  5 * 4 * 3 * 2 * 1 * getFactorial(0)
  5 * 4 * 3 * 2 * 1 * 1
  
*/
console.log('5', getFactorial(5));
console.log('-26', getFactorial(-26));
console.log('String', getFactorial('sadasfasd'));

// 1. Write a recursive function to print out all the elements of an array.
const arr = [1, 2, 3, 4, 5];

function printArrayElements(array) {
	if (array.length === 0) {
		return;
		console.log('Array is empty!');
	} else {
		console.log(array[0]);
		const updatedArray = array.slice(1);
		printArrayElements(updatedArray);
	}
}
printArrayElements(arr);

function printArrayElements(array, index = 0) {
	if (index === array.length) {
		return;
	} else {
		console.log(array[index]);
    // I used index++ which is postfix increment meaning that the value was passed to the next recursive call before being incremented. That actually resulted in index value never changing that created an infinite recursion. Changing it to index+1 solves the issue.
    printArrayElements(array, index+1);
	}
}
printArrayElements(arr);

// 2. Write a recursive function to capitalize the first letter of each word in a sentence.
const ex2sentence =
	'a recursive function to capitalize the first letter of each word in a sentence.  ';

function capitalizeWords(sentence) {
	const words = sentence.trim().split(' '); // [...., 'a', 'sentence.' ]
	if (sentence.trim().length === 0) {
		// if (words.length === 0)
		return '';
	} else {
		const firstWord = words[0];
		console.log(firstWord[0]); // undefined
		console.log(firstWord[0].toUpperCase(), firstWord.slice(1));
		const firstWordCapitalized =
			firstWord[0].toUpperCase() + firstWord.slice(1);
		const restOfTheSentence = words.slice(1).join(' ');
		return firstWordCapitalized + ' ' + capitalizeWords(restOfTheSentence);
	}
}

console.log(capitalizeWords(ex2sentence));

// 3. Write a recursive function to count the number of vowels in a string.
const sentenceEx4 = 'Hello, how are loretm sadasd you sdas?';
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(string) {
	if (string.length === 0) {
		return 0;
	} else {
		const letter = string[0];
		if (vowels.includes(letter.toLowerCase())) {
			return 1 + countVowels(string.slice(1));
		} else return countVowels(string.slice(1));
	}
}
console.log('Ex 3:', countVowels(sentenceEx4));

// 4. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';

// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;

// 6. Write a recursive function to flatten an object with nested objects into a single-level object.
const nestedObj = {
	name: 'John',
	age: 30,
	address: {
		street: '123 Main St',
		city: 'New York',
		country: 'USA',
	},
	hobbies: ['reading', 'coding'],
	social: {
		twitter: '@johndoe',
		linkedIn: 'johndoe',
	},
};

// 7. Write a recursive function to find the maximum depth of a nested object.
const nestedObjEx7 = {
	a: 1,
	b: {
		c: 2,
		d: {
			e: 3,
			f: {
				g: 4,
			},
		},
	},
	h: 5,
};
// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';
// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';
// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};
