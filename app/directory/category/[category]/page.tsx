// app/directory/category/[category]/page.tsx
import Link from 'next/link';
import { fetchRecipesByCategory } from '../../../services/api';
import { Recipe } from '../../../types';
import './category.css';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  // In Next.js 15, we should properly handle the params using Promise.resolve
  const resolvedParams = await Promise.resolve(params);
  const category = resolvedParams.category;
  
  // Now use the resolved category parameter
  const recipes = await fetchRecipesByCategory(category);

  return (
    <div className="category-page-container">
      <header className="category-header">
        <h1><span className="category-label">{category}</span> Recipes</h1>
        <p>Explore our collection of {recipes.length} delicious {category.toLowerCase()} recipes</p>
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
                  <div className="recipe-overlay">
                    <span className="view-recipe">View Recipe</span>
                  </div>
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
          <p>No recipes found in this category. Please try another category!</p>
        </div>
      )}
    </div>
  );
}
