import Button from '@/app/components/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('Should render text', () => {
    render(<Button href="#test">Hello world</Button>);

    const btn = screen.getByRole('link', { name: /Hello world/i });

    expect(btn).toBeInTheDocument();
  });

  it('Should contain correct link url', () => {
    render(<Button href="#test">Hello world</Button>);

    const btn = screen.getByRole('link', { name: /Hello world/i });

    expect(btn.getAttribute('href')).toBe('#test');
  });
});
