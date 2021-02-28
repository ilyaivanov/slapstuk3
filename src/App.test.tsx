import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Having a board", () => {
  it("renders learn react link", () => {
    render(<App />);

    const linkElement = screen.getByText("Lyrics");
    expect(linkElement).toBeInTheDocument();
  });
});
