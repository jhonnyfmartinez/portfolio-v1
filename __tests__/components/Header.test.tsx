import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/app/components/Header';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
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

  it('Should add blur className to body when drawer toggled', () => {
    const drawerToggleButton = screen.getByRole('button');

    fireEvent.click(drawerToggleButton);

    expect(document.body).toHaveClass('blur');
  });
});
