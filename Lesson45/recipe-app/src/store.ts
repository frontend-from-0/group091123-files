import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./modules/recipes/recipesSlice";
import userReducer from "./modules/user/userSlice";

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    user: userReducer
  },
});
