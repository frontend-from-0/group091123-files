import './styles.css';

export const List = ({todos,updateTodos}) => {

	function handleClick(id) {
		updateTodos((prevState) =>
			prevState.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	}

	return (
		<ul className='todo__list'>
			{todos.map((item) => (
				<li onClick={() => handleClick(item.id)} key={item.id}>
					<span className={item.completed ? 'completed' : ''}>
						{item.title}
					</span>
					<button className={'btn'}>X</button>
				</li>
			))}
		</ul>
	);
};
