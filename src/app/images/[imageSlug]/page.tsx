export default function PixabayImage({ params }: { params: { imageSlug: string }}) {
  const { imageSlug } = params;

  return (
    <h2>{imageSlug}</h2>
  )
  
}