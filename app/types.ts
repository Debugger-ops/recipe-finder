// app/types.ts
export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  }
  
  export interface Area {
    strArea: string;
  }
  
  export interface Ingredient {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
  }
  
  export interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }