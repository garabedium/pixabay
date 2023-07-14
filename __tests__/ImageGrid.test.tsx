import { render, screen } from '@testing-library/react';
import { mockPixabayImages } from './utils/test.util';
import ImageGrid from '@/components/ImageGrid';

describe('ImageGrid', () => {
  it('renders a heading', () => {
    render(<ImageGrid images={mockPixabayImages} />)

    const images = screen.getAllByRole('img');

    expect(images.length).toBe(10);
  })
})