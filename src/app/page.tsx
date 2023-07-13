"use client";

import { homeHeader, searchLabel } from "./utils/constants.util";
import useApiPixabayImagesByQuery from "./hooks/useApiPixabayImagesQuery";
import ImageGrid from "./components/ImageGrid";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const { 
    handleImageQuery, 
    imageResults, 
    imageError
  } = useApiPixabayImagesByQuery();

  return (
    <main>

      <h1 className={styles.logoText}>{homeHeader}</h1>
      <form className={styles.searchBar} name="pixabay-image-search">
        <input
          autoFocus
          type="search"
          onChange={handleImageQuery}
          placeholder={searchLabel}
          aria-label={searchLabel}
          name="search-images"
          className={styles.searchInput}
        />
      </form>

      <ImageGrid images={imageResults} />

      {imageError}

    </main>
  )
}
