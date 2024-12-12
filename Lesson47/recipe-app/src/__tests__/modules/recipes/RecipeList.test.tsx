import { MemoryRouter } from 'react-router-dom';
import { RecipeList } from '../../../modules/recipes/RecipeList';
import { render, screen } from '@testing-library/react';
import { useRecipes } from '../../../modules/recipes/RecipesProvider';
import { useTheme } from '@mui/material/styles';
import '@testing-library/jest-dom';

const mockedRecipes = [
  {
    idMeal: '1',
    strMeal: 'Recipe 1',
    strMealThumb: 'thumb1.jpg',
  },
  {
    idMeal: '2',
    strMeal: 'Recipe 2',
    strMealThumb: 'thumb2.jpg',
  },
];

// Mock external dependency (absolute path)
jest.mock('@mui/material/styles', () => ({
  useTheme: jest.fn(),
}));

// Mock internal dependency (relative path)
jest.mock('../../../modules/recipes/RecipesProvider', () => ({
  useRecipes: jest.fn(),
}));

const renderRecipeList = () => {
  return render(
    <MemoryRouter>
      <RecipeList />
    </MemoryRouter>,
  );
};

describe('<RecipeList> component', () => {
  it("should show 'No recipes found' if there is no recipes", () => {
    useTheme.mockReturnValue({ palette: { warning: 'rgb(237, 108, 2)' } });

    renderRecipeList();

    expect(screen.getByTestId('no-recipes-found-text')).toBeInTheDocument();
    expect(screen.getByTestId('no-recipes-found-text')).toHaveTextContent(
      'No recipes found',
    );
    expect(screen.getByTestId('no-recipes-found-text')).toHaveStyle({
      color: 'rgb(237, 108, 2)',
    });
  });

  it('should show recipe list if there are recipes', () => {
    useRecipes.mockReturnValue(mockedRecipes);

    renderRecipeList();

    expect(screen.getByTestId('recipe-list')).toBeInTheDocument();
    expect(
      screen.queryByTestId('no-recipes-found-text'),
    ).not.toBeInTheDocument();
  });
  it('if there are two recipes display two recipes', () => {
    useRecipes.mockReturnValue(mockedRecipes);
    renderRecipeList();

    expect(screen.getByTestId('recipe-list')).toBeInTheDocument();
    expect(screen.getByText(mockedRecipes[0].strMeal)).toBeInTheDocument();
    expect(screen.getByText(mockedRecipes[1].strMeal)).toBeInTheDocument();
  });
});
