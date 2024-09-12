import {Routes, Route} from 'react-router-dom';
import {RecipeList} from './modules/recipes/RecipeList';
import {SearchBar} from './modules/recipes/SearchBar';
/*
Lesson 38 TODOs:
1. Add recipes pages routes:
  - One the main app page, only display featured information
  - Add a Search dedicated page
  - Add Categories page
    - Create Recipe List page
  - Add Recipe details page
  - Add Create new recipe page
2.  Implement Protected Routes:
  - Create new recipe page
  - Settings page
  - User page
3. Implement 404 Page (catch-all route for undefined paths):




*/

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/user" element={<h1>User page</h1>} />
      <Route path="/settings" element={<h1>Settings page</h1>} />
      <Route path="/" element={
        <>
          <SearchBar />
          <RecipeList />
        </>
      }/>
    </Routes>
  )
};