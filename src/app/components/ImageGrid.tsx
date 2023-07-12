import { ImageGridProps } from "../interfaces/image-grid.interface"
import { PixabayImage } from "../interfaces/pixabay-image.interface";
import styles from '@/styles/ImageGrid.module.css';
import Image from "next/image";
import Link from "next/link";

export default function ImageGrid(props: ImageGridProps) {
  const { images } = props;

  const imageLinks = images.map((image: PixabayImage) => (
      <Link 
      key={image.id}
      href={{
        pathname: `/images/${image.id}`,
        query: {
          web_image: image.webformatURL
        }        
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
    <div className={styles.imageGrid}>
      {imageLinks}
    </div>
  )
}