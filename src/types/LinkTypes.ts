type LinkContentTypes = {
  name: string;
  icon: string;
  url: string;
  color?: string;
  bgColor?: string;
}

export type LinkTypes = {
  name: string;
  email: string;
  displayPicture?: string;
  links: LinkContentTypes[];
};