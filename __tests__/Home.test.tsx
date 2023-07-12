import { render, screen } from '@testing-library/react';
import { homeHeader } from '@/app/utils/constants.util';
import Home from '@/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: `${homeHeader}`,
    })

    expect(heading).toBeInTheDocument();
  })
})