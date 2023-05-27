import { render, screen } from '@testing-library/react';
import App from '@/app/page';
import '@testing-library/jest-dom';

describe('App', () => {
  it('App should render', () => {
    render(<App />);

    const heroSection = screen.getByTestId('hero-section');
    const aboutSection = screen.getByTestId('about-section');
    const experienceSection = screen.getByTestId('experience-section');
    const featuredSection = screen.getByTestId('featured-section');

    expect(heroSection).toBeInTheDocument();
    expect(aboutSection).toBeInTheDocument();
    expect(experienceSection).toBeInTheDocument();
    expect(featuredSection).toBeInTheDocument();
  });
});
