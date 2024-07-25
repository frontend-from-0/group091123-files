/* 

export - keyword that is used to do named export of variabled after that keyword
const - JS keyword, defines variable
RadioInput - name of the component, should be capitalized and in CamelCase
... = ({}) => ... - {} inside arrow function's parentesis is an object that holds "props" (properties). They are "variables" that you can pass to a component from outside of it.

*/

export const RadioInput = ({name, title, inputGroupName}) => {
	return (
		<div>
			<label for={name}>{title}</label>
			<input type='radio' id={name} value={title} name={inputGroupName} />
		</div>
	);
};
