"use client";
import { useSearchParams } from 'next/navigation';
import { PixabayImagePageProps } from "@/interfaces/pixabay-image.interface";
import Image from 'next/image';
import Link from 'next/link';

export default function PixabayImagePage({ params }: PixabayImagePageProps) {
  const searchParams = useSearchParams();
  const { imageId } = params;
  const image = searchParams.get('imageWeb') as string;
  const imageTags = searchParams.get('imageTags') as string;
  const imageStyle = {
    margin: '10px auto',
  };
  return (
    <div className="text-center">
      <h1>{imageTags}</h1>
      <Image
        src={image}
        alt={imageTags}
        width={300}
        height={300}
        style={imageStyle}
      />
      <Link href="/">&#8592; Back</Link>
    </div>
  )
  
}