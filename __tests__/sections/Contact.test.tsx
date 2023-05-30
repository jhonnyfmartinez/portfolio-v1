import Contact from '@/app/sections/Contact';
import { render, screen } from '@testing-library/react';

describe('Contact section', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('should render contact section', () => {
    const title = screen.getByText('Contact me');
    const button = screen.getByText('Say hi 👋');

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should have a link to my email', () => {
    const button = screen.getByText('Say hi 👋');

    expect(button).toHaveAttribute('href', 'mailto:jhonny9550@gmail.com');
  });
});
