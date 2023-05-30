import Hero from '@/app/sections/Hero';
import { RESUME_URL } from '@/app/utils/data.utils';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

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

    expect(downloadResumeButton).toHaveAttribute('href', RESUME_URL);
    expect(downloadResumeButton).toHaveAttribute('target', '_blank');
    expect(downloadResumeButton).toHaveAttribute('download');
  });
});
