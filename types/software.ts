export type Platform = {
  name: string;
  version: string;
  size: string;
  requirements: string;
  download: string;
};

export type Software = {
  id: string;
  icon: string;
  name: string;
  description: string;
  released: string;
  status: string;
  technologies: string[];
  releaseNotes: string;
  github: string;
  platforms: Platform[];
};