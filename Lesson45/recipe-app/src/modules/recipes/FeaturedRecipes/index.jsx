import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { update } from "../recipesSlice";
import { useRecipesDispatch, RECIPE_ACTIONS } from "../RecipesProvider";
import { fetchRecipesByIngredient } from "../recipeService";
import { RecipeList } from "../RecipeList";

export const FeaturedRecipes = () => {
  const dispatchContext = useRecipesDispatch();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRecipesByIngredient("chicken_breast").then((recipes) => {
      dispatchContext({ type: RECIPE_ACTIONS.update, payload: recipes });
      dispatch(update(recipes));
    });
  }, []);

  return <RecipeList />;
};
