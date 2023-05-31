import About from '@/app/sections/About';
import { TECH_STACK_DATA } from '@/app/utils/data.utils';
import { render, screen } from '@testing-library/react';

describe('About section', () => {
  it('should render about section', () => {
    render(<About />);

    const title = screen.getByText('About me');
    const technologiesTitle = screen.getByText('Here is my main tech stack:');
    const technologiesList = screen.getAllByRole('listitem');

    expect(title).toBeInTheDocument();
    expect(technologiesTitle).toBeInTheDocument();
    expect(technologiesList).toHaveLength(TECH_STACK_DATA.length);
  });
});
