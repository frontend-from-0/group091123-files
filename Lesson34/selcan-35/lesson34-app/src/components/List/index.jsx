import './styles.css';

export const List = ({todos,updateTodos}) => {

	function handleClick(id) {
		updateTodos((prevState) =>
			prevState.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	}

	function handleDelete(id){
		updateTodos((prevState) => prevState.filter((todo) => todo.id !== id))
	}

	return (
		<ul className='todo__list'>
			{todos.map((item) => (
				<li onClick={() => handleClick(item.id)} key={item.id}>
					<span className={item.completed ? 'completed' : ''}>
						{item.title}
					</span>
					<button className={'btn'} onClick={() => handleDelete(item.id)}>X</button>
				</li>
			))}
		</ul>
	);
};
