import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';
import { RecipeItem } from '../RecipeItem';
import { useTheme } from '@mui/material/styles';
import { useRecipes } from '../RecipesProvider';

export const RecipeList = () => {
  const theme = useTheme();
  const recipes = useRecipes();

  return (
    <>
      {recipes?.length > 0 ? (
        <Stack direction='row' flexWrap='wrap' data-testid={'recipe-list'}>
          {recipes.map((recipe) => (
            <Item key={recipe.idMeal} sx={{ width: 275 }}>
              <RecipeItem recipe={recipe} />
            </Item>
          ))}
        </Stack>
      ) : (
        <p
          data-testid={'no-recipes-found-text'}
          style={{ color: theme.palette.warning }}
        >
          No recipes found
        </p>
      )}
    </>
  );
};
