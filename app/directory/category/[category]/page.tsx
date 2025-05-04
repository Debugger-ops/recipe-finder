import { fetchRecipesByCategory } from '../../../services/api';
import { Recipe } from '../../../types';
import './category.css';
import ClientSearchButton from '../../../components/ClientSearchButton';

interface CategoryPageParams {
  category: string;
}

export default async function CategoryPage({ params }: { params: CategoryPageParams }) {
  const { category } = params;

  // ✅ Fetch data on the server
  const recipes: Recipe[] = await fetchRecipesByCategory(category);

  return (
    <div className="container">
      <h1 className="title">Recipes from {category}</h1>

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
