"use client";

import { useState, useCallback, useEffect } from "react";

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const apiBase = "https://pixabay.com/api/?";
  const apiKey = "key={TODO:REPLACE_WITH_ENV_VAR}";

  const queryApi = useCallback(async() => {
    const apiUrl = `${apiBase}${apiKey}&q=${query}`;
    const options = { method: 'GET' };
    try {
      const response = await fetch(apiUrl, options);
      const { hits } = await response.json();
      setResults(hits);
    } catch (error) {
      setError('Oops. That search failed.')
    }

  }, [query])  

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  }

  useEffect(() => {
    if (query.length){
      queryApi();
    }
  }, [query, queryApi]);

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

        {error}
      </div>
    </main>
  )
}
