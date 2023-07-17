import { render, screen } from '@testing-library/react';
import { homeHeader, searchLabel } from '@/utils/constants.util';
import Home from '@/page';

describe('Home', () => {
  const input = () => screen.getByLabelText(searchLabel);

  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: `${homeHeader}`,
    })

    expect(heading).toBeInTheDocument();
  })

  it('renders and focuses on a search input', () => {
    render(<Home />)
    expect(input()).toBeInTheDocument();
    expect(input()).toHaveFocus();
  })
})