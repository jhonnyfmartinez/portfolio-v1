export interface ProjectInterface {
  name: string;
  type: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    github: string;
    demo: string;
  };
}

export interface ExperienceInterface {
  title: string;
  content: {
    position: string;
    period: string;
    items: string[];
  };
}
