import React from "react";
import Board from "./board/Board";
import defaultBoard from "./defaultBoard";
import Header from "./Header";
import { cls, css } from "./infra";
import { div } from "./infra/react";

function App() {
  const [isDark, setIsDark] = React.useState(false);
  return div(
    { cls: cls.page, clsMap: { "board-dark": isDark } },
    React.createElement(Header, {
      isDark,
      onDarkChanged: (isNewDark) => setIsDark(isNewDark),
    }),
    React.createElement(Board, { board: defaultBoard })
  );
}

export default App;

css.class("page", {
  width: "100vw",
  height: "100vh",
});
