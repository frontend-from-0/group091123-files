import { useEffect } from 'react';
import {
	useRecipesDispatch,
	RECIPE_ACTIONS,
} from '../RecipesProvider';
import { fetchRecipesByIngredient } from '../recipeService';
import {RecipeList} from '../RecipeList';

export const FeaturedRecipes = () => {
	const dispatch = useRecipesDispatch();

	useEffect(() => {
		fetchRecipesByIngredient('chicken_breast').then((recipes) =>
			dispatch({ type: RECIPE_ACTIONS.update, payload: recipes }),
		);
	}, []);
	
	return (
		<RecipeList />
	);
};
