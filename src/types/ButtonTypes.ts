export type ButtonType = {
  text: string;
  type?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void
};
