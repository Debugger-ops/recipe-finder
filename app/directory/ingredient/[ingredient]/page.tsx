// app/directory/ingredient/[ingredient]/page.tsx
import Link from 'next/link';
import { fetchRecipesByIngredient } from '../../../services/api';
import { Recipe } from '../../../types';
import './ingredient.css';
export default async function IngredientPage({ params }: { params: { ingredient: string } }) {
  const recipes = await fetchRecipesByIngredient(params.ingredient);

  return (
    <div className="ingredient-page-container">
      <header className="ingredient-header">
        <h1>Recipes with <span className="highlight">{params.ingredient}</span></h1>
        <p>{recipes.length} delicious recipes found</p>
        <Link href="/directory" className="back-link">
          ← Back to Directory
        </Link>
      </header>

      {recipes.length > 0 ? (
        <div className="recipe-grid">
          {recipes.map((recipe: Recipe) => (
            <Link 
              href={`/recipe/${recipe.idMeal}`} 
              key={recipe.idMeal}
              className="recipe-card-link"
            >
              <div className="recipe-card">
                <div className="recipe-image-container">
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="recipe-image"
                  />
                </div>
                <div className="recipe-info">
                  <h3 className="recipe-title">{recipe.strMeal}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-recipes">
          <p>No recipes found with this ingredient. Try another ingredient!</p>
        </div>
      )}
    </div>
  );
}