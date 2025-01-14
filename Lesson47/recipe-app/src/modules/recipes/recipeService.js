import { fetchData } from '../../utils';

export const BD_BASE_URL = `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_API_KEY}/`;

export async function fetchRecipesByIngredient(query) {
  const data = await fetchData(`${BD_BASE_URL}/filter.php?i=`, query);
  return data.meals;
}

export async function searchRecipesByName(query) {
  const data = await fetchData(`${BD_BASE_URL}/search.php?s=`, query);
  return data.meals;
}
