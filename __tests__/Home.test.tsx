import { render, screen } from '@testing-library/react';
import { homeHeader, searchLabel } from '@/utils/constants.util';
import Home from '@/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: `${homeHeader}`,
    })

    expect(heading).toBeInTheDocument();
  })

  it('renders a search input', () => {
    render(<Home />)

    const input = screen.getByLabelText(searchLabel)
    expect(input).toBeInTheDocument();
  })
})