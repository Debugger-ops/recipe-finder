// app/recipe/[id]/page.tsx
import Link from 'next/link';
import { fetchRecipeById } from '../../services/api';
import './recipe-detail.css';

export default async function RecipeDetailPage({ params }: { params: { id: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams.id;
  
  const recipe = await fetchRecipeById(id);
  
  // Extract ingredients and measurements into pairs
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        ingredient,
        measure: measure || ''
      });
    }
  }
  
  // Split instructions into steps
  const instructions = recipe.strInstructions
    .split('.')
    .filter((step: string) => step.trim() !== '')
    .map((step: string) => step.trim() + '.');

  return (
    <div className="recipe-detail-container">
      <div className="recipe-detail-header">
        <Link href="javascript:history.back()" className="back-link">
          ← Back
        </Link>
        <h1 className="recipe-title">{recipe.strMeal}</h1>
        {recipe.strCategory && (
          <div className="recipe-tags">
            <span className="recipe-category">{recipe.strCategory}</span>
            {recipe.strArea && <span className="recipe-area">{recipe.strArea}</span>}
            {recipe.strTags && recipe.strTags.split(',').map((tag: string) => (
              <span key={tag} className="recipe-tag">{tag.trim()}</span>
            ))}
          </div>
        )}
      </div>

      <div className="recipe-content">
        <div className="recipe-media">
          <img 
            src={recipe.strMealThumb} 
            alt={recipe.strMeal} 
            className="recipe-image"
          />
          {recipe.strYoutube && (
            <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" className="video-button">
              Watch Video Tutorial
            </a>
          )}
        </div>

        <div className="recipe-details">
          <section className="ingredients-section">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {ingredients.map((item, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-measure">{item.measure}</span>
                  <span className="ingredient-name">{item.ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="instructions-section">
            <h2>Instructions</h2>
            <ol className="instructions-list">
              {instructions.map((step: string, index: number) => (
                <li key={index} className="instruction-step">{step}</li>
              ))}
            </ol>
          </section>
          
          {recipe.strSource && (
            <section className="source-section">
              <h2>Source</h2>
              <a href={recipe.strSource} target="_blank" rel="noopener noreferrer" className="source-link">
                Original Recipe
              </a>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}