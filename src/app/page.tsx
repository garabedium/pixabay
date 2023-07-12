"use client";

import { useState, useCallback } from "react";

export default function Home() {
  const [query, setQuery] = useState('');

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  }

  return (
    <main>
      <div>
        <h1>Pixabay Image Search</h1>
        <input
          autoFocus
          type="search"
          value={query}
          onChange={handleQuery}
        />
      </div>
    </main>
  )
}
