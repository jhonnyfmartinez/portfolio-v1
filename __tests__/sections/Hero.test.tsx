import { render, screen } from '@testing-library/react';
import Hero from '@/app/sections/Hero';
import '@testing-library/jest-dom';

describe('Hero section', () => {
  it('should render hero section', () => {
    render(<Hero />);

    const title = screen.getByText('Jhonny Martinez.');
    const greeting = screen.getByText('Hello world! 👋 My name is');
    const description = screen.getByText('I craft software solutions.');
    const downloadResumeButton = screen.getByText('Download my resume');

    expect(title).toBeInTheDocument();
    expect(greeting).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(downloadResumeButton).toBeInTheDocument();
  });

  it('should download resume when clicking on download button', () => {
    render(<Hero />);

    const downloadResumeButton = screen.getByText('Download my resume');

    expect(downloadResumeButton).toHaveAttribute('href', '/resume.pdf');
    expect(downloadResumeButton).toHaveAttribute('target', '_blank');
    expect(downloadResumeButton).toHaveAttribute('download');
  });
});
