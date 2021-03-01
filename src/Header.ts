import React from "react";
import { cls, css, sUtils, colors, spacings, zIndexes } from "./infra";
import { div, input, button } from "./infra/react";

interface HeaderProps {
  isDark: boolean;
  onDarkChanged: (d: boolean) => void;
  toggleRightSidebar: () => void;
}

const Header = ({ isDark, onDarkChanged, toggleRightSidebar }: HeaderProps) =>
  div(
    {
      cls: cls.header,
    },
    input({
      type: "checkbox",
      checked: isDark,
      onChange: (e) => onDarkChanged(e.currentTarget.checked),
    }),
    button({ onClick: toggleRightSidebar }, "toggle")
  );

css.class(cls.header, {
  gridArea: "header",
  height: spacings.headerHeight,
  borderBottom: sUtils.solidBorder(1, colors.light.border),
  zIndex: zIndexes.header,
});

css.parentChild(cls.boardDark, cls.header, {
  backgroundColor: colors.dark.itemBackground,
  borderBottom: sUtils.solidBorder(1, colors.dark.border),
});

export default (props: HeaderProps) => React.createElement(Header, props);
