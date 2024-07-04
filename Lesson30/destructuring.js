// Arrays 
// Basic Example
const numbers = [1, 2, 3, 4];

// Without destructuring
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];
// const fourth = numbers[3];


// With destructuring
const [a, b, c, d] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4


// Skipping Elements
// const [first, , , fourth] = numbers;
console.log(first); // 1
console.log(fourth); // 4

// Using Rest Parameters to Capture the Rest of the Elements
// const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Default Values
const numbersForDefaultValuesExample = [1];
const [e = 10, f = 20] = numbersForDefaultValuesExample;

console.log(e); // 1
console.log(f); // 20


// Objects
// Basic Usage

const person = {
  name: 'Alice',
  age: 30,
  job: 'Engineer'
};

// Without destructuring
const name = person.name;
const age = person.age;

// With destructuring
// const { name, age } = person;

console.log(name); // Alice
console.log(age);  // 30

// Renaming Variables
const { name: personName, age: personAge } = person;

console.log(personName); // Alice
console.log(personAge);  // 30

// Default Values
const { name: anotherPersonName, isStudent = false } = person;

console.log(name); // Alice
console.log(isStudent);  // false

// Nested Objects

const personWithContactInfo = {
  name: 'Dave',
  age: 32,
  contact: {
    email: 'dave@example.com',
    phone: '123456789'
  }
};

const { 
  name: firstName,
  contact: { email, phone } 
} = personWithContactInfo;

console.log(firstName); // Dave
console.log(email); // dave@example.com
console.log(phone); // 123456789

// Rest Properties
const { name: nameForRestExample, age: ageForRestExample, ...rest } = personWithContactInfo;
console.log(nameForRestExample);
console.log(ageForRestExample);
console.log(rest);




