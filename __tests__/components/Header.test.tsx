import Header from '@/app/components/Header';
import { fireEvent, render, screen } from '@testing-library/react';

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

    expect(document.documentElement).toHaveClass('blur');
  });

  it('Should close drawer if click outside', async () => {
    const drawerToggleButton = screen.getByRole('button');

    fireEvent.click(drawerToggleButton);

    const rootLink = screen.getByTestId('root-link');

    rootLink.focus();

    fireEvent.mouseDown(document.activeElement || document.body);

    const toggleIcon = drawerToggleButton.children.item(0) as HTMLElement;

    expect(toggleIcon.dataset.testname).toBe('menu');
  });

  it('Should not close drawer if click inside', async () => {
    const drawerToggleButton = screen.getByRole('button');

    fireEvent.click(drawerToggleButton);

    const wrapper = screen.getByTestId('wrapper');

    fireEvent.mouseDown(wrapper);

    const toggleIcon = drawerToggleButton.children.item(0) as HTMLElement;

    expect(toggleIcon.dataset.testname).toBe('x');
  });
});
