import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyle?: string; // Optional containerStyle
  handleClick?: MouseEventHandler<HTMLButtonElement>; // Optional handleClick
}
