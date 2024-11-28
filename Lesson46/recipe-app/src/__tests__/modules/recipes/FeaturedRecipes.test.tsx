import {fetchRecipesByIngredient} from "../../../modules/recipes/recipesService";

jest.mock("../../../modules/recipes/recipesService", () => ({
  fetchRecipesByIngredient: jest.fn(),
}));



// Only example, not a working test
test("should show featured recipes", async () => {
  fetchRecipesByIngredient.mockResolvedValue([
    {
      idMeal: "1",
      strMeal: "Recipe 1",
      strMealThumb: "thumb1.jpg",
    },
    {
      idMeal: "2",
      strMeal: "Recipe 2",
      strMealThumb: "thumb2.jpg",
    },
  ]);

  render(<FeaturedRecipes />);

  expect(await findByText("Recipe 1")).toBeInTheDocument();
  expect(await findByText("Recipe 2")).toBeInTheDocument();
});