import NavLinks from '@/app/components/NavLinks';
import { fireEvent, render, screen } from '@testing-library/react';

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

  it('should dispatch a close drawer event when a link is clicked', () => {
    render(<NavLinks />);
    const linksContainer = screen.getByRole('list');
    const aboutLink = linksContainer.children[0].children[0];

    const closeDrawerEvent = new CustomEvent('closedrawer');
    window.dispatchEvent = jest.fn();

    fireEvent.click(aboutLink);

    expect(window.dispatchEvent).toHaveBeenCalledWith(closeDrawerEvent);
  });
});
