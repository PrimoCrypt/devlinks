export type LinkContentTypes = {
  id: number
  name: string;
  icon?: string;
  url?: string;
};

export type LinkTypes = {
  name?: string;
  email?: string;
  displayPicture?: string;
  links?: LinkContentTypes[];
};
