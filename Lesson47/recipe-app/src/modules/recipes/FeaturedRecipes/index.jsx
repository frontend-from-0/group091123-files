import { useEffect } from 'react';
import { useRecipesDispatch, RECIPE_ACTIONS } from '../RecipesProvider';
import { fetchRecipesByIngredient } from '../recipeService';
import { RecipeList } from '../RecipeList';

export const FeaturedRecipes = () => {
  const dispatchContext = useRecipesDispatch();

  useEffect(() => {
    fetchRecipesByIngredient('chicken_breast').then((recipes) => {
      dispatchContext({ type: RECIPE_ACTIONS.update, payload: recipes });
    });
  }, [dispatchContext]);

  return <RecipeList />;
};
