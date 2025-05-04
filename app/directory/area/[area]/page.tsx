import { fetchRecipesByArea } from '../../../services/api';
import { Recipe } from '../../../types';
import './area.css'; // Regular CSS import

type PageProps = {
  params: {
    area: string;
  };
};

export default async function AreaPage({ params }: PageProps) {
  const recipes = await fetchRecipesByArea(params.area);

  return (
    <div className="container">
      <h1 className="title">Recipes from {params.area}</h1>
      
      <div className="recipeGrid">
        {recipes.map((recipe: Recipe) => (
          <div key={recipe.idMeal} className="recipeCard">
            <div className="imageWrapper">
              <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal} 
                className="recipeImage"
              />
            </div>
            <h2 className="recipeName">{recipe.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
