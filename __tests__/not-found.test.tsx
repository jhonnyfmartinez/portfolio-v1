import NotFound from '@/app/not-found';
import { render, screen } from '@testing-library/react';

describe('NotFound', () => {
  it('renders without crashing', () => {
    render(<NotFound />);
    expect(screen.getByText('404 |')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});
