import NavLinks from '@/app/components/NavLinks';
import { render, screen } from '@testing-library/react';

describe('NavLinks', () => {
  it('should render 4 nav links', () => {
    render(<NavLinks />);
    const linksContainer = screen.getByRole('list');

    expect(linksContainer.childElementCount).toBe(4);
    expect(linksContainer.children[0].children[0].getAttribute('href')).toBe('/#about');
    expect(linksContainer.children[1].children[0].getAttribute('href')).toBe('/#experience');
    expect(linksContainer.children[2].children[0].getAttribute('href')).toBe('/#projects');
    expect(linksContainer.children[3].children[0].getAttribute('href')).toBe('/#contact');
  });
});
