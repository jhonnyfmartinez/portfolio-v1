import { render, screen } from '@testing-library/react';
import ProjectCard from '@/app/components/ProjectCard';
import '@testing-library/jest-dom';
import { PROJECTS_DATA } from '@/app/utils/data.utils';

describe('ProjectCard component', () => {
  it('should render project card', () => {
    const data = PROJECTS_DATA[0];
    render(<ProjectCard {...data} />);

    const title = screen.getByText(data.name);
    const description = screen.getByText(data.description);
    const listItems = screen.getAllByRole('listitem');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(listItems.length).toBe(data.tech.length + 1); // 1 for demo link
  });
});
