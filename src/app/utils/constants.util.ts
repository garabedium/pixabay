export const homeHeader = "Pixabay Image Search" as const;
export const apiErrorText = "Oops. That search failed." as const;
export const searchLabel = "Search Pixabay images" as const;

export const pixabayApiBase = "https://pixabay.com/api/" as const;
export const pixabayApiKey = `?key=${process.env.PIXABAY_API_KEY}` as const;

export const apiClientRoutes = {
  baseUrl: '/api',
  pixabayImages: '/pixabay/images',
} as const;