"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { homeHeader } from "./utils/constants.util";
import { PixabayImage } from "./interfaces/pixabay-image.interface";

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const apiBase = "https://pixabay.com/api/?";
  const apiKey = "key=38176596-baeb4d9b88920483b6400bb56";

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

  const getImageSlug = (pageUrl: string) => {
    // Todo: replace with constants
    // Validate the base url
    // use image id as fallback
    return pageUrl.replace('https://pixabay.com/photos/','').replace('/','');
  }

  const imageResults = results.map((image: PixabayImage) => (
      <Link 
      key={image.id}
      href={{
        pathname: `/images/${getImageSlug(image.pageURL)}`
      }}>
        <Image 
          src={image.previewURL}
          key={image.id}
          alt={image.tags}
          width={image.previewWidth}
          height={image.previewHeight}
        />
      </Link>
    )
  )

  return (
    <main>
      <div>
        <h1>{homeHeader}</h1>
        <input
          autoFocus
          type="search"
          value={query}
          onChange={handleQuery}
        />

        <div id="results">
          {imageResults}
        </div>
        {/* <Link 
          href={{
            pathname: '/images/lorem',
            query: {
              test: 'lorem_ipsum'
            }
          }}
        >Lorem 123</Link> */}
        {error}
      </div>
    </main>
  )
}
