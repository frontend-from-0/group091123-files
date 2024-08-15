import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { PerformanceState } from './components/PerformanceState';
import { useState } from 'react';
import { todoData } from './data';
import './App.css';

export const App = () => {
	const [todos, setTodos] = useState(todoData);
	// const loggedInUser = {
	//   isLoggedInUser: true,
	//   username: "johndoe01"
	// };
	// const loggedOutUser = {
	//   isLoggedInUser: false
	// };

	return (
		<div className='container'>
			<Navbar />
			<div className='app'>
				<List todos={todos} updateTodos={setTodos} />

				<PerformanceState
					completedTodos={todos.filter((todo) => todo.completed).length}
					totalTodos={todos.length}
				/>
			</div>
		</div>
	);
};
