import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders without crashingk", () => {
  const div = document.createElement("div");
  render(<App />, div);
  unmountComponentAtNode(div);
});
