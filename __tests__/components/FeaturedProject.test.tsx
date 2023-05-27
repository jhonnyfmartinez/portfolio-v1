import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturedProject from '@/app/components/FeaturedProject';
import { ProjectInterface } from '@/app/interfaces/project.interface';

describe('FeaturedProject', () => {
  const project: ProjectInterface = {
    name: 'Test project',
    description: 'Test description',
    image: '/test-image.png',
    links: { github: 'https://github.com', demo: 'https://demo.com' },
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Jest'],
    type: 'Mobile App',
  };

  it('Should render a project', () => {
    render(<FeaturedProject {...project} index={0} />);

    const title = screen.getByText(project.name);
    const type = screen.getByText(project.type);
    const image = screen.getByAltText('Featured project');
    const description = screen.getByText(project.description);
    const links = screen.getAllByRole('listitem');

    expect(title).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(links).toHaveLength(6); // 4 tech + 2 links
  });

  it('Should render a project with odd index', () => {
    render(<FeaturedProject {...project} index={1} />);

    const article = screen.getByRole('article');

    expect(article).toHaveClass('xl:flex-row-reverse');
  });

  it('Should render a project with even index', () => {
    render(<FeaturedProject {...project} index={2} />);

    const article = screen.getByRole('article');

    expect(article).not.toHaveClass('xl:flex-row-reverse');
  });

  it('Should render a project with only 1 link', () => {
    render(
      <FeaturedProject {...project} index={0} links={{ github: 'https://github.com', demo: '' }} />,
    );

    const links = screen.getAllByRole('listitem');

    expect(links).toHaveLength(5); // 4 tech + 1 link
  });
});
