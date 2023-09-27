export type Project = {
  image: string;
  title: string;
  status: ProjectStatus;
  technologyIcons: string[];
  paragraph: string;
  siteLink: string;
};

export type ProjectStatus = 'live' | 'development' | 'updating';
