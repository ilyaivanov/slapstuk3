import React from "react";
import Board from "./board/Board";
import defaultBoard from "./defaultBoard";
import header from "./Header";
import { cls, css, zIndexes } from "./infra";
import { div } from "./infra/react";
const e = React.createElement;

function App() {
  const [isDark, setIsDark] = React.useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
  const ref = React.createRef<HTMLDivElement>();
  return div(
    {
      cls: cls.page,
      clsMap: { "board-dark": isDark },
      ref,
    },
    header({
      isDark,
      onDarkChanged: (isNewDark) => setIsDark(isNewDark),
      toggleRightSidebar: () => setIsSidebarVisible(!isSidebarVisible),
    }),
    e(Board, {
      board: defaultBoard,
      onScroll: (e) => {
        const current = ref.current;
        if (current) {
          const elem = e.currentTarget;
          const currentPercent = Number.parseInt(
            current.style.backgroundPositionX
          );
          const maxScrollLeft = elem.scrollWidth - elem.offsetWidth;
          const newPercent = Math.round(
            (elem.scrollLeft / maxScrollLeft) * 100
          );
          if (newPercent != currentPercent)
            current.style.backgroundPositionX = newPercent + "%";
        }
      },
    }),
    div({
      cls: cls.rightSidebar,
      clsMap: { [cls.rightSidebarHidden]: !isSidebarVisible },
    })
  );
}

export default App;

css.class(cls.page, {
  width: "100vw",
  height: "100vh",
  display: "grid",
  overflow: "hidden",
  gridTemplateRows: "auto 1fr",
  // gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "1fr auto",
  gridTemplateAreas: `
    "header header"
    "board rightSidebar"
  `,

  background:
    "url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/8226b6654c1221c5cdba81ab4db86760/photo-1612701943975-7814268fab1f.jpg)",
  backgroundSize: "cover",
  backgroundPositionX: "10%",
  backgroundPositionY: "center",
});

// "leftSidebar gallery rightSidebar"
//     "player player player"
const sidebarWidth = 350;
css.class(cls.rightSidebar, {
  gridArea: "rightSidebar",
  width: sidebarWidth,
  boxShadow: "0px 5px 5px 0 rgb(0 0 0 / 53%)",
  backgroundColor: "white",
  zIndex: zIndexes.rightSidebar,
  transition: "margin 200ms",
});

css.class(cls.rightSidebarHidden, {
  marginRight: -sidebarWidth,
});
