import { fetchRecipesByArea } from '../../../services/api';
import { Recipe } from '../../../types';
import styles from './area.module.css';

export default async function AreaPage({ params }: { params: { area: string } }) {
  const recipes = await fetchRecipesByArea(params.area);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recipes from {params.area}</h1>
      
      <div className={styles.recipeGrid}>
        {recipes.map((recipe: Recipe) => (
          <div key={recipe.idMeal} className={styles.recipeCard}>
            <div className={styles.imageWrapper}>
              <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal} 
                className={styles.recipeImage}
              />
            </div>
            <h2 className={styles.recipeName}>{recipe.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
