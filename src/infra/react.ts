import React from "react";
import { ClassMap, ClassName } from "./projectSpecific/keys";

interface CommonProps {
  key?: string;
  tid?: string;
  cls?: ClassName;
  clsMap?: ClassMap;
}

//interesting idea to test react without jsx
//like elm or flutter
interface DivProps extends CommonProps {
  ref?: React.RefObject<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onWheel?: React.WheelEventHandler<HTMLDivElement>;
  onScroll?: React.UIEventHandler<HTMLDivElement>;
}

type Children = React.ReactNode | React.ReactNode[];

export function div(props: DivProps, ...children: Children[]) {
  return React.createElement("div", convertProps(props), ...children);
}

interface ButtonProps extends CommonProps {
  ref?: React.RefObject<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onWheel?: React.WheelEventHandler<HTMLButtonElement>;
}

export function button(props: ButtonProps, ...children: Children[]) {
  return React.createElement("button", convertProps(props), ...children);
}

export function fragment(...children: Children[]) {
  return React.createElement(React.Fragment, null, ...children);
}

interface InputProps {
  type: "checkbox" | "text";
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function input({ ...props }: InputProps) {
  return React.createElement("input", { ...props });
}

interface SpanProps extends CommonProps {}

export function span(props: SpanProps, text: string) {
  return React.createElement("span", convertProps(props), text);
}

interface ImgProps extends CommonProps {
  src: string;
}

export function img(props: ImgProps) {
  return React.createElement("img", { alt: "", ...convertProps(props) });
}

const convertProps = ({ cls, clsMap, tid, ...props }: CommonProps): {} => ({
  className: cn(cls, clsMap),
  "data-testid": tid,
  ...props,
});

const cn = (
  cls: ClassName | undefined,
  clsMap: ClassMap | undefined
): string => {
  let className = cls || "";
  if (clsMap)
    className +=
      " " +
      keys(clsMap)
        .filter((key) => !!clsMap[key])
        .join(" ");
  return className;
};

const keys = <T>(val: T): (keyof T)[] => Object.keys(val) as (keyof T)[];
