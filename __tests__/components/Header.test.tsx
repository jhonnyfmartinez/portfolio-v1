import { render, renderHook, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/app/components/Header';
import { act } from 'react-dom/test-utils';
import { sleep } from '@/app/utils/sleep';
import useOnClickOutside from '@/app/hooks/useClickOutside';

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

  it('Should close drawer if click outside', async () => {
    const drawer = screen.getByTestId('drawer');
    const drawerToggleButton = screen.getByRole('button');
    const wrapper = screen.getByTestId('wrapper');
    const wrapperRef = { current: wrapper };
    const mockHandler = jest.fn();

    renderHook(() => useOnClickOutside(wrapperRef, mockHandler));

    fireEvent.click(drawerToggleButton);

    const rootLink = screen.getByTestId('root-link');

    fireEvent.click(rootLink);

    await act(() => sleep(300));

    // expect(mockHandler).toBeCalledTimes(1);
    expect(drawer).toHaveClass('side-drawer translate-x-full');
  });
});
