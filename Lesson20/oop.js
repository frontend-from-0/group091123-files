/* 
  OOP - Object Oriented programming
  FP - Functional programming

  OOP:  state is usually stored in objects and can be modified through methods 
  FP: state is immutable, and functions are designed to transform data rather than mutate it
  
  OOP: classes encapsulates related data and behavior
  FP: problems are broken down into smaller, composable functions that can be combined to solve larger problems.
*/

class User {
	constructor(username, age, password) {
		this._username = username.toLowerCase().trim(); // Variable with _ prefix is called "private"
		this._age = age;
		this._password = password;
	}

  get username () {
    return this._username;
  }

	get age() {
		return this._age + ' years old';
	}

	get password() {
		const lengthOfPassword = this._password.length;
		let publicPasswordString = '';
		for (let i = 0; i < lengthOfPassword; i++) {
			publicPasswordString = publicPasswordString + '*';
		}
		return publicPasswordString;
	}

	set username(usernameParam) {
		return this._username = usernameParam.toLowerCase().trim();
	}

	greet() {
		return "Hello, I'm " + this._username;
	}

	introduce() {
		return `Hello, I\'m ${this._username}. I\'m ${this._age} years old.`;
	}
}

const john = new User('JohnDoe  ', 20, 'asdfqewqrwq');
const jane = new User('janedoe', 30, 'sdasdsadfgewgew');

console.log(john.username);
console.log(john, jane);
console.log(john.greet(), jane.greet());
console.log(john.introduce(), jane.introduce());
console.log(john.password);
console.log(john.age, jane.age);

console.log(john.username);
john.username = ' JohnDoe  ';
console.log(john.username);

// Animal class: Cat, Duck

class Animal {
	constructor(name, kind, numberOfLegs, sound) {
		this._name = name;
		this._kind = kind;
		this._numberOfLegs = numberOfLegs;
		this._sound = sound;
	}
	describe() {
		return `This is a ${this._kind}. And it's name is ${this._name}. It has ${this._numberOfLegs} legs.`;
	}
	sound() {
		return this._sound;
	}

}

class Cat extends Animal {
  constructor (name) {
    super(name, 'cat', 4, 'miyav');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "dog", 4, "hav hav");
  }
}

class Duck extends Animal {
  constructor(name) {
    super(name, "duck", 2, "quack");
  }
  fly () {
    return "the duck is flying";
  }
}

const duck = new Duck("duck1");

const cat = new Cat("karamel");
const cat2 = new Cat("cat 2");

const dog = new Dog("dog1");
const dog2 = new Dog("dog2");

console.log(cat.describe());
console.log(cat2.describe());
console.log(dog.describe());
console.log(duck.describe());
console.log(duck.fly());
