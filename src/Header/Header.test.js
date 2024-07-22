import { Header } from "./Header";
import { render, screen } from "@testing-library/react";

describe("Header Component tests", () => {
  // fit("Check Nothing!!", () => {});
  it("Check header text", () => {
    render(<Header />);
    const eleRef = screen.getByTestId("header");
    expect(eleRef.textContent).toBe("My First Next App");
  });
  test("Check header text length", () => {
    render(<Header />);
    const eleRef = screen.getByTestId("header");
    expect(eleRef.textContent).toHaveLength(17);
  });

  // we can use it or test method, and if we want the jest to skip any test then we have to write fit method
});
