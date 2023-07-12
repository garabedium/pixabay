"use client";

import { homeHeader } from "./utils/constants.util";
import useApiPixabayImagesByQuery from "./hooks/useApiPixabayImagesQuery";
import ImageGrid from "./components/ImageGrid";

export default function Home() {
  const { 
    imageQuery,
    handleImageQuery, 
    imageResults, 
    imageError
  } = useApiPixabayImagesByQuery();

  return (
    <main>
      <div>
        <h1>{homeHeader}</h1>
        <input
          autoFocus
          type="search"
          value={imageQuery}
          onChange={handleImageQuery}
        />

        <ImageGrid images={imageResults} />

        {imageError}
      </div>
    </main>
  )
}
