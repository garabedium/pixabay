import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';
import { PixabayImage, PixabayImageType } from '@/interfaces/pixabay-image.interface';
import sample from 'lodash.sample';

export const PixabayImageFactory = Factory.define<PixabayImage>(({ sequence }) => ({
  id: sequence,
  pageURL: faker.internet.url(),
  type: sample(["all","photo","illustration","vector"]) as PixabayImageType,
  tags: `${faker.animal.dog()}, ${faker.color.human()}`,
  previewURL: faker.image.urlLoremFlickr({ width: 156, height: 156 }),
  previewWidth: faker.number.int(156),
  previewHeight: faker.number.int(156),
  webformatURL: faker.image.url(),
  webformatWidth: faker.number.int(250),
  webformatHeight: faker.number.int(250),
  largeImageURL: faker.image.url(),
  imageWidth: faker.number.int(500),
  imageHeight: faker.number.int(500),
  imageSize: faker.number.int(50000),
  views: faker.number.int(500),
  downloads: faker.number.int(250),
  collections: faker.number.int(250),
  likes: faker.number.int(250),
  comments: faker.number.int(250),
  user_id: faker.number.int(1000000),
  user: faker.internet.userName(),
  userImageURL: faker.internet.url()
}))