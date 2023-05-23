import { render, screen } from "@testing-library/react";
import App from "./App";

test("render main page", () => {
  render(<App />);
  const element = screen.getByText("Main Page");
  expect(element).toBeInTheDocument();
});
