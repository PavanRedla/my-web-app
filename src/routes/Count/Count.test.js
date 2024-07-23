import { fireEvent, render, screen } from "@testing-library/react";
import { Count } from ".";

describe("Count component", () => {
  it("render correctly", () => {
    render(<Count />);
    const ref = screen.getByTestId("count");
    expect(ref).toBeInTheDocument();
  });
  it("check initial count", () => {
    render(<Count />);
    const h1Ref = screen.getByRole("heading");
    expect(h1Ref.textContent).toBe("0");
  });
  it("check count value after button click", () => {
    render(<Count />);
    const h1Ref = screen.getByRole("heading");
    const btnRef = screen.getByRole("button");
    for (let i = 0; i < 5; i++) {
      fireEvent.click(btnRef);
    }
    expect(h1Ref.textContent).toBe("5");
  });
});
