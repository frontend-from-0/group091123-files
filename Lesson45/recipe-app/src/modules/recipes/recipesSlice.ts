import { createSlice } from '@reduxjs/toolkit'
import { RecipeDetails } from './models/RecipeDetails';

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipeList: [] as RecipeDetails[],
    newRecipe: undefined
  },
  reducers: {
    update: (state, action) => {
      const newRecipes = action.payload.filter(
				(payloadItem: RecipeDetails) =>
					!state.recipeList.some((recipe: RecipeDetails) => recipe.idMeal === payloadItem.idMeal)
			);

      // This is a direct mutation! Don't do it anywhere else in React app (can only be done in the Slice)
      state.recipeList = [...newRecipes, ...state.recipeList];
    },
    refresh: (state, action) => {
      state.recipeList = action.payload;
    },
    deleteAll: (state) => {
      state.recipeList = [];
    },
    addNewRecipe: (state, action) => {
      state.newRecipe = action.payload;
    },
    clearNewRecipe: (state) => {
      state.newRecipe = undefined;
    }
  }
})

// Action creators are generated for each case reducer function
export const { update } = recipesSlice.actions

export default recipesSlice.reducer