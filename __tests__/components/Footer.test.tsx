import Footer from '@/app/components/Footer';
import { SOCIAL_MEDIA_DATA } from '@/app/utils/data.utils';
import { render, screen } from '@testing-library/react';

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

  it('Should render social links', () => {
    const socialLinks = screen.getByRole('list');
    const links = screen.getAllByRole('listitem');

    expect(socialLinks).toBeInTheDocument();
    expect(links).toHaveLength(SOCIAL_MEDIA_DATA.length + 1); // +1 for resume link
  });
});
