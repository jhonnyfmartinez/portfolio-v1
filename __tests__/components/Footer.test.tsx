import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/app/components/Footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('Should render a footer element', () => {
    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
  });

  it('Should have a link to my github repo', () => {
    const link = screen.getByText('Designed & built by Jhonny Martinez');

    expect(link).toHaveAttribute('href', 'https://github.com/jhonny9550/portfolio-v1');
  });
});
