import { cls, css, sUtils, colors, spacings } from "./infra";

interface HeaderProps {
  isDark: boolean;
  onDarkChanged: (d: boolean) => void;
}

const Header = ({ isDark, onDarkChanged }: HeaderProps) => (
  <div className={cls.header}>
    <input
      type="checkbox"
      checked={isDark}
      onChange={(e) => onDarkChanged(e.currentTarget.checked)}
    />
  </div>
);

css.class(cls.header, {
  height: spacings.headerHeight,
  borderBottom: sUtils.solidBorder(1, colors.light.border),
});

css.parentChild(cls.boardDark, cls.header, {
  backgroundColor: colors.dark.itemBackground,
  borderBottom: sUtils.solidBorder(1, colors.dark.border),
});

export default Header;
