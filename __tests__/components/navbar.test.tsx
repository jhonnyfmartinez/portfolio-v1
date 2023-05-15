import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '@/app/components/NavBar';

describe('Navbar', () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  it('Should render a nav element', () => {
    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });

  it('Should have a root link and redirect to the root page', () => {
    const rootLink = screen.getByTestId('root-link');

    expect(rootLink).toBeInTheDocument();
    expect(rootLink.getAttribute('href')).toBe('/');
  });

  it('Should have logo inside root link element', () => {
    const rootLink = screen.getByTestId('root-link');

    expect(rootLink.firstChild).toBeDefined();
    expect(rootLink.firstChild?.nodeName).toBe('IMG');
  });

  it('Should have 4 links', () => {
    const linksContainer = screen.getByTestId('links-container');

    expect(linksContainer.childElementCount).toBe(4);
    expect(linksContainer.children[0].getAttribute('href')).toBe('#about');
    expect(linksContainer.children[1].getAttribute('href')).toBe('#experience');
    expect(linksContainer.children[2].getAttribute('href')).toBe('#projects');
    expect(linksContainer.children[3].getAttribute('href')).toBe('#contact');
  });
});
