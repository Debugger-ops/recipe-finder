import { fetchRecipesByArea } from '../../../services/api';
import { Recipe } from '../../../types';
import './area.css';
import ClientSearchButton from '../../../components/ClientSearchButton';

interface AreaPageParams {
  area: string;
}

export default async function AreaPage({ params }: { params: AreaPageParams }) {
  const { area } = params;

  // ✅ Fetch data on the server
  const recipes: Recipe[] = await fetchRecipesByArea(area);

  return (
    <div className="container">
      <h1 className="title">Recipes from {area}</h1>

      <ClientSearchButton /> {/* Client Component remains fine */}

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
