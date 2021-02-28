import React from "react";
import { cls, css, sUtils, colors, spacings } from "../infra";
import { div, span } from "../infra/react";
import viewBoardItem from "./BoardItem";

type Props = {
  board: Board;
};

class BoardView extends React.Component<Props> {
  renderColumn = (column: Column) =>
    div(
      {
        key: column.id,
        cls: cls.column,
      },
      span({ cls: cls.columnTitle }, column.name),
      div({ cls: cls.itemsContainer }, column.items.map(viewBoardItem))
    );

  render() {
    return div(
      { cls: cls.board },
      this.props.board.columns.map(this.renderColumn)
    );
  }
}

css.class(cls.board, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  height: `calc(100vh - ${spacings.headerHeight}px)`,
  color: colors.light.text,
  overflowX: "auto",
  paddingTop: spacings.columnGap,
  paddingBottom: spacings.distanceBetweenScrollAndColumnSeparator,
});

css.text(
  sUtils.scrollbar(cls.board, { height: 6, color: colors.light.scrollbar })
);

css.parentChild(cls.boardDark, cls.board, {
  backgroundColor: colors.dark.boardBackground,
  color: colors.dark.text,
});

css.class(cls.column, {
  display: "flex",
  position: "relative",
  flexDirection: "column",
  minWidth: 350,
  width: 350,
  borderRight: sUtils.solidBorder(1, colors.light.border),
  paddingLeft: spacings.columnGap,
  /* one piexel of space between scroll and border */
  paddingRight: spacings.distanceBetweenScrollAndColumnSeparator,
});

css.parentChild(cls.boardDark, cls.column, {
  borderRight: sUtils.solidBorder(1, colors.dark.border),
});

css.class(cls.columnTitle, {
  fontWeight: 700,
  fontSize: 26,
});

css.class(cls.itemsContainer, {
  flex: 1,
  overflowY: "overlay" as any,
  paddingRight:
    spacings.columnGap - spacings.distanceBetweenScrollAndColumnSeparator,
});

css.text(
  sUtils.scrollbar(cls.itemsContainer, {
    width: 6,
    color: colors.light.scrollbar,
  })
);

export default BoardView;
