import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { cls } from "./infra";
import { div, span, fragment } from "./infra/react";
import App from "./App";

jest.mock("./infra/CollapsibleContainer", () => ({
  collapsibleContainer: ({ isOpen }: any, children: any) => {
    if (isOpen) return children();
    else return null;
  },
}));

it("rendering div with a className should render that div with a class", () => {
  render(React.createElement(header as any, null));

  const firstCounter = screen.getByTestId("foo1");
  const secondCounter = screen.getByTestId("foo2");
  expect(firstCounter).toBeInTheDocument();
  expect(firstCounter).toHaveClass(cls.header);

  expect(firstCounter).toHaveTextContent("Counter: 1");
  expect(secondCounter).toHaveTextContent("Counter: 1");

  fireEvent.click(firstCounter);
  expect(firstCounter).toHaveTextContent("Counter: 2");
  expect(secondCounter).toHaveTextContent("Counter: 1");

  fireEvent.click(secondCounter);
  expect(firstCounter).toHaveTextContent("Counter: 2");
  expect(secondCounter).toHaveTextContent("Counter: 2");

  fireEvent.click(secondCounter);
  expect(firstCounter).toHaveTextContent("Counter: 2");
  expect(secondCounter).toHaveTextContent("Counter: 3");
});

it("render app", () => {
  render(React.createElement(App));

  expect(
    screen.queryByText("Ludovico Einaudi - Una mattina FULL ALBUM")
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByText(new RegExp("2017 Personality*")));

  expect(
    screen.queryAllByText("Ludovico Einaudi - Una mattina FULL ALBUM")[0]
  ).toBeInTheDocument();
});

const header = (): React.ReactFragment => {
  return fragment(viewCounter("foo1"), viewCounter("foo2"));
};

const counter = ({ id }: { id: string }) => {
  const [size, setSize] = React.useState(1);
  return div(
    {
      tid: id,
      cls: cls.header,
      onClick: () => setSize(size + 1),
    },
    myLabel("Counter: " + size)
  );
};

const viewCounter = (id: string) => React.createElement(counter, { id });

const myLabel = (label: string) => span({ cls: cls.subitem }, label);
