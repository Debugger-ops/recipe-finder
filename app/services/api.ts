// app/services/api.ts

// Keep your existing functions here (fetchCategories, fetchAreas, fetchIngredients, etc.)
export async function fetchCategories() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    return data.categories;
}

export async function fetchAreas() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await response.json();
    return data.meals;
}

export async function fetchIngredients() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    return data.meals;
}

// For category and ingredient pages
export async function fetchRecipesByCategory(category: string) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    return data.meals || [];
}

export async function fetchRecipesByIngredient(ingredient: string) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
}

// Add this new function for fetching detailed recipe information
export async function fetchRecipeById(id: string) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
}

// New function for fetching recipes by area
export async function fetchRecipesByArea(area: string) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await response.json();
    return data.meals || [];
}
