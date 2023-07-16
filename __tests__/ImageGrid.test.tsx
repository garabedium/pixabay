import { render, screen } from '@testing-library/react';
import { mockPixabayImages } from './utils/test.util';
import ImageGrid from '@/components/ImageGrid';

describe('ImageGrid', () => {
  it('renders images with alt text', () => {
    render(<ImageGrid images={mockPixabayImages} />)
    const images: HTMLImageElement[] = screen.getAllByRole('img');
    
    images.forEach((image) => {
      const altText = image.alt;
      expect(altText.length).toBeGreaterThan(0);
    })
  })
})