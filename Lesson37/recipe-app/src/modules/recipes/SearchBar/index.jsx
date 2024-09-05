import { useState } from 'react';

export const SearchBar = () => {
	const [query, setQuery] = useState('');

	function handleChange(e) {
		setQuery(e.target.value.trim());
	}

  function handleSubmit(e) {
    e.preventDefault();
		// TODO: Send request to search recipes

  }

	return (
		<form onSubmit={handleSubmit} className='search-form'>
			<input
				onChange={handleChange}
				aria-label='Recipe search'
				placeholder='Search for recipes...'
				className='search-input'
			/>
		</form>
	);
};
