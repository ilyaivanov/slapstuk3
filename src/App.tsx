import React from "react";
import Board from "./Board/Board";
import defaultBoard from "./defaultBoard";
import Header from "./Header";
import { cn, css } from "./infra";

function App() {
  const [isDark, setIsDark] = React.useState(false);
  return (
    <div className={cn({ page: true, "board-dark": isDark })}>
      <Header
        isDark={isDark}
        onDarkChanged={(isNewDark) => setIsDark(isNewDark)}
      />
      <Board board={defaultBoard} />
    </div>
  );
}

export default App;

css.class("page", {
  width: "100vw",
  height: "100vh",
});
