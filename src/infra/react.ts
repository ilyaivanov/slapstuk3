import React from "react";
import { ClassProp, cn } from "./utils";

//interesting idea to test react without jsx
//like elm or flutter
type DivProps = {
  cls?: ClassProp;
  children?: React.ReactNode | React.ReactNode[];
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export function div({ cls, ...props }: DivProps) {
  const passProps = { className: cls ? cn(cls) : undefined, ...props };
  if (Array.isArray(props.children))
    return React.createElement("div", passProps, ...props.children);
  return React.createElement("div", passProps, props.children);
}

type InputProps = {
  type: "checkbox" | "text";
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function input({ ...props }: InputProps) {
  return React.createElement("input", { ...props });
}

type SpanProps = {
  children?: string;
};

export function span({ ...props }: SpanProps) {
  return React.createElement("span", { ...props });
}

type ImgProps = {
  cls?: ClassProp;
  src: string;
};

export function img({ ...props }: ImgProps) {
  return React.createElement("img", { alt: "", ...props });
}
