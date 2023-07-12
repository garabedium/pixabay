export interface BasePixabayApi {
  total: number,
  totalHits: number,
}

export interface PixabayImage {
  id: number,
  pageURL: string,
  type: string,
  tags: string,
  previewURL: string,
  previewWidth: number,
  previewHeight: number,
  webformatURL: string,
  webformatWidth: number,
  webformatHeight: number,
  largeImageURL: string,
  imageWidth: number,
  imageHeight: number,
  imageSize: number,
  views: number,
  downloads: number,
  collections: number,
  likes: number,
  comments: number,
  user_id: number,
  user: string,
  userImageURL: string
}

export interface PixabayImagesApi extends BasePixabayApi {
  hits: PixabayImage[]
}

export interface PixabayImagePageProps {
  params: {
    params: {
      imageSlug: string
    }
  }
}