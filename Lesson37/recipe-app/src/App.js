import { SearchBar } from './modules/recipes/SearchBar';
import { fetchRecipesByIngredient } from './modules/recipes/recipeService';
import './App.css';
import { useState, useEffect } from 'react';

export const App = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetchRecipesByIngredient('chicken_breast').then((recipes) =>
			setRecipes(recipes.length > 0 ? recipes : []),
		);
	}, []);

	return (
		<div className='container'>
			<header className='header'>Recipe Search App</header>
			<SearchBar />
			{recipes.length > 0 ? (
				<ul className='recipe-list'>
					{recipes.map((recipe) => (
						<li key={recipe.idMeal} className='recipe-item'>{recipe.strMeal}</li>
					))}
				</ul>
			) : (
        <p className='no-recipes'>No recipes found</p>
			)}
		</div>
	);
};
