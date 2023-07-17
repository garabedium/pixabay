import { useState, useCallback, useEffect, useMemo } from "react";
import debounce from 'lodash.debounce';

import { 
  apiClientRoutes as api,
  apiErrorText
 } from "@/utils/constants.util";

function useApiPixabayImagesByQuery() {
  const [imageQuery, setQuery] = useState('');
  const [imageResults, setResults] = useState([]);
  const [imageError, setError] = useState('');

  const queryApi = useCallback(async() => {
    const apiUrl = `${api.baseUrl}${api.pixabayImages}?query=${imageQuery}`;
    const options = { method: 'GET' };
    try {
      const response = await fetch(apiUrl, options);
      const { data } = await response.json();
      setResults(data);
    } catch (error) {
      setError(apiErrorText)
    }

  }, [imageQuery])  

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  // Memo used to avoid calling debounce() on each re-render 
  const handleImageQuery = useMemo(() => debounce(handleQueryChange, 550), []);

  useEffect(() => {
    if (imageQuery.length){
      queryApi();
    }
  }, [imageQuery, queryApi]);

  // Cancel any scheduled calls on component unmount
  useEffect(() => {
    return () => {
      handleImageQuery.cancel();
    }
  }, [handleImageQuery]);

  return { imageResults, imageError, handleImageQuery }
}

export default useApiPixabayImagesByQuery;