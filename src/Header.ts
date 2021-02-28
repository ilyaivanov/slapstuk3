import { cls, css, sUtils, colors, spacings } from "./infra";
import { div, input } from "./infra/react";

interface HeaderProps {
  isDark: boolean;
  onDarkChanged: (d: boolean) => void;
}

const Header = ({ isDark, onDarkChanged }: HeaderProps) =>
  div({
    cls: cls.header,
    children: input({
      type: "checkbox",
      checked: isDark,
      onChange: (e) => onDarkChanged(e.currentTarget.checked),
    }),
  });

css.class(cls.header, {
  height: spacings.headerHeight,
  borderBottom: sUtils.solidBorder(1, colors.light.border),
});

css.parentChild(cls.boardDark, cls.header, {
  backgroundColor: colors.dark.itemBackground,
  borderBottom: sUtils.solidBorder(1, colors.dark.border),
});

export default Header;
