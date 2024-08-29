import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { PerformanceState } from './components/PerformanceState';
import { useState } from 'react';
import { todoData } from './data';
import { UserProvider } from './userContext';
import { Account } from './components/Account';
import './App.css';

//todo:create a new component.
export const App = () => {
	const [todos, setTodos] = useState(todoData);



	const loggedInUser = {
		isLoggedInUser: true,
		username: "johndoe01"
	};
	const loggedOutUser = {
		isLoggedInUser: false
	};

	return (
		<UserProvider initialState={loggedOutUser}>

			<div className='container'>
				<Navbar />
				<Account />
				<div className='app'>
					<List todos={todos} updateTodos={setTodos} />

					<PerformanceState
						completedTodos={todos.filter((todo) => todo.completed).length}
						totalTodos={todos.length}
					/>
				</div>
			</div>
		</UserProvider>

	);
};
