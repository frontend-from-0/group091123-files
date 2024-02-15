console.log('JS in the extertnal file!');

// This is a single-line comment

/*
This is a
Multi-line
comment
 */

// Keywords: var, const, let, true, false, new, undefined

// Variable = değişken
var myNumber = 10; // Number
console.log('1.', myNumber);
myNumber = 2; // Number
console.log('2.', myNumber);

const myWord = 'Word'; // String (should be used inside single or double quotes: '' or "")
console.log('3.', myWord);

let isOpen = true; // Boolean (can only be true or false)
console.log('4.', isOpen);
isOpen = false;
console.log('5.', isOpen);


// BigInt type
const myBigNumber = BigInt(233232232);
const myBigNumber2 = 233232232n;

let nonPresentValue; // undefined - Another JS type
console.log('6. nonPresentValue is: ', nonPresentValue);

let anotherNonPresentValue = null; // null - another JS type (absence of value)
console.log('7. anotherNonPresentValue is: ', anotherNonPresentValue);

// Symbol
let mySymbol = Symbol(undefined);
console.log('8. mySymbol is: ', mySymbol);
mySymbol = Symbol('undefined');
console.log('9. mySymbol is: ', mySymbol);

// Object type
const person = {
  name: 'John',
  age: 30,
  isStuden: false,
  address: undefined,
  someOtherData: {
    title: 'Title',
    description: 'Placeholder description'
  }
};
console.log('10. person object is: ', person);


// Array 
const personArray = ['John', 30, false, undefined, {
  title: 'Title',
  description: 'Placeholder description'
}];

console.log('11. person array is: ', personArray);

// Expression
3 + 5;

// Statement
const myStatement = 3 + 5;

console.log('12. myStatement is: ', myStatement);





const myName = 'Gozde';
console.log('13. MyName is: ', myName);

const myFavouritNumber = 30;
console.log("14.MyNumber is: ", myFavouritNumber);

const isCountry = true;
console.log("15.isCountry is: ", true);

const myBigNumber3 = BigInt(234234252);
console.log("16.myBigNumber3 is: ",myBigNumber3);

const mySymbol1 = Symbol("undefined");
console.log("17.mySymbol1 is: ",mySymbol1);