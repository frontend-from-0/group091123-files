import {
	useRecipes,
} from '../RecipesProvider';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';
import {RecipeItem} from '../RecipeItem';
import {useTheme} from '@mui/material/styles';

export const RecipeList = () => {
	const recipes = useRecipes();
	const theme = useTheme();

	return (
		<>
			{recipes.length > 0 ? (
				<Stack direction='row' flexWrap='wrap'>
					{recipes.map((recipe) => (
						<Item key={recipe.idMeal} sx={{ width: 275 }}>
							<RecipeItem recipe={recipe}/>
						</Item>
					))}
				</Stack>
			) : (
				<p style={{color: theme.palette.warning}}>No recipes found</p>
			)}
		</>
	);
};
