import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';
import {RecipeItem} from '../RecipeItem';
import {useTheme} from '@mui/material/styles';
import { useSelector } from 'react-redux';

export const RecipeList = () => {
	const theme = useTheme();
	const recipes = useSelector(state => state.recipes.recipeList);

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
