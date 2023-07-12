export default function PixabayImagePage({ params }: { params: { imageSlug: string, query: string }}) {
  const { imageSlug, query } = params;

  return (
    <div>
      <h2>{imageSlug}</h2>
      {query}
    </div>
  )
  
}