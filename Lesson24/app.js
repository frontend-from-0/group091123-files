const phoneRegex = /^\+?9?0?\d{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let isFormCorrect = true;

	const nameInput = document.getElementById('name');
	const nameInputError = document.getElementById('nameError');

	if (nameInput.value.length < 3) {
		nameInputError.textContent = 'Name should be at least 3 characters long.';
		isFormCorrect = false;
	} else {
		nameInputError.textContent = '';
	}

	const emailInputError = document.getElementById('emailError');
	const emailInput = document.getElementById('email');
  
	if (!emailRegex.test(emailInput.value)) {
		emailInputError.textContent = 'Please enter correct email address.';
		isFormCorrect = false;
	} else {
		emailInputError.textContent = '';
	}

	const formData = {
		name: nameInput.value,
		email: emailInput.value,
	};

	if (isFormCorrect) {
		console.table(formData);
	} else {
		console.error('Form incorrect.');
	}
});
