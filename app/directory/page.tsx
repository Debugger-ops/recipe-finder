// app/directory/page.tsx
import Link from 'next/link';
import { fetchCategories, fetchAreas, fetchIngredients } from '../services/api';
import { Category, Area, Ingredient } from '../types';
import './second.css'
export default async function RecipeDirectory() {
  const categories = await fetchCategories();
  const areas = await fetchAreas();
  const ingredients = await fetchIngredients();

  return (
    <div className="directory-container">
      <header className="directory-header">
        <h1>Recipe Directory</h1>
        <p>Explore recipes by category, cuisine, or ingredient</p>
      </header>
      
      <section className="directory-section">
        <div className="section-header">
          <h2>Categories</h2>
          <div className="section-divider"></div>
        </div>
        <div className="cards-container">
          {categories.map((category: Category) => (
            <Link key={category.idCategory} href={`/directory/category/${category.strCategory}`} className="card-link">
              <div className="card category-card">
                <div className="card-image-container">
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                    className="card-image"
                  />
                </div>
                <h3 className="card-title">{category.strCategory}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="directory-section">
        <div className="section-header">
          <h2>Cuisines</h2>
          <div className="section-divider"></div>
        </div>
        <div className="cards-container">
          {areas.map((area: Area) => (
            <Link key={area.strArea} href={`/directory/area/${area.strArea}`} className="card-link">
              <div className="card cuisine-card">
                <div className="cuisine-icon">🍽️</div>
                <h3 className="card-title">{area.strArea}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="directory-section">
        <div className="section-header">
          <h2>Ingredients</h2>
          <div className="section-divider"></div>
        </div>
        <div className="cards-container">
          {ingredients.map((ingredient: Ingredient) => (
            <Link key={ingredient.idIngredient} href={`/directory/ingredient/${ingredient.strIngredient}`} className="card-link">
              <div className="card ingredient-card">
                <div className="ingredient-icon">🌿</div>
                <h3 className="card-title">{ingredient.strIngredient}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}