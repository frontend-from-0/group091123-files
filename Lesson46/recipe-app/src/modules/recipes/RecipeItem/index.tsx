import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';
import { Recipe } from '../models/Recipe';

interface RecipeItemProps {
  recipe: Recipe;
}

export const RecipeItem = ({recipe}: RecipeItemProps) => {
  const navigate = useNavigate();

  const handleRecipeClick = () => {
    navigate(`/recipes/${recipe.idMeal}`)
  }

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.strMeal}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleRecipeClick}>
          See details
        </Button>
      </CardActions>
    </Card>
  );
}