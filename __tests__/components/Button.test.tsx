import { render, screen } from '@testing-library/react';
import Button from '../../app/components/Button';
import '@testing-library/jest-dom';

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
