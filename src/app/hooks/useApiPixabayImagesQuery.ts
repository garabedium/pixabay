import { useState, useCallback, useEffect } from "react";
import { 
  pixabayApiBase as apiBase,
  pixabayApiKey as apiKey,
  apiErrorText
 } from "@/utils/constants.util";

function useApiPixabayImagesByQuery() {
  const [imageQuery, setQuery] = useState('');
  const [imageResults, setResults] = useState([]);
  const [imageError, setError] = useState('');

  const queryApi = useCallback(async() => {
    const apiUrl = `${apiBase}${apiKey}&q=${imageQuery}`;
    const options = { method: 'GET' };
    try {
      const response = await fetch(apiUrl, options);
      const { hits } = await response.json();
      setResults(hits);
    } catch (error) {
      setError(apiErrorText)
    }

  }, [imageQuery])  

  const handleImageQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  }

  useEffect(() => {
    if (imageQuery.length){
      queryApi();
    }
  }, [imageQuery, queryApi]);

  return { imageQuery, imageResults, imageError, handleImageQuery }
}

export default useApiPixabayImagesByQuery;