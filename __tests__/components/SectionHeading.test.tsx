import { render, screen } from '@testing-library/react';
import SectionHeading from '@/app/components/SectionHeading';
import '@testing-library/jest-dom';
import { TbAlien } from 'react-icons/tb';

describe('SectionHeading component', () => {
  it('should render section heading', () => {
    const title = 'Test title';
    render(<SectionHeading icon={TbAlien}>{title}</SectionHeading>);

    const titleElement = screen.getByText(title);
    const iconElement = screen.getByTestId('section-heading-icon');

    expect(titleElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
