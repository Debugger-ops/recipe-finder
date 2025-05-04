"use client";
import Link from 'next/link';
import './home.css';

export default function Home() {
  const handleSearch = () => {
    const searchQuery = (document.getElementById('searchInput') as HTMLInputElement).value;
    // Handle the search functionality here, e.g., navigate to a search results page
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="container">
      <header>
        <h1>Recipe Finder</h1>
        <p className="tagline">Discover delicious recipes from around the world!</p>
      </header>
      
      <div className="browse-section">
        <Link href="/directory" className="browse-button">
          Browse Recipe Directory
        </Link>
      </div>
      
      <div className="search-section">
        <h2>Find the perfect recipe</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter ingredients or recipe name..."
            className="search-input"
            id="searchInput"
            aria-label="Search for a recipe"
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
