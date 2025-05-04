// app/components/ClientSearchButton.tsx

'use client'; // This tells Next.js that this is a Client Component

import { useState } from 'react';

const ClientSearchButton = () => {
  const [searchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
    // Add your search functionality here
  };

  return (
    <button onClick={handleSearch}>Search</button> 
  );
};

export default ClientSearchButton;
