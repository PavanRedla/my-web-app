import { describe } from "node:test";
import { About } from "../About/About";
import { render, screen } from "@testing-library/react";
import { Bus } from "my-own-react-library";

jest.mock("my-own-react-library", () => {
  class Bus {
    fw = 2;
    bw = 4;
    totalWheels() {
      return 6;
    }
    getColor() {
      return "red";
    }
  }
  return {
    __esModule: true,
    name: "Dhoni",
    location: "Ranchi",
    add: (x, y) => {
      return x + y;
    },
    Bus: Bus,
  };
});

describe("About component", () => {
  it("render correctly", async () => {
    render(<About />);
    const eleRef = await screen.getByRole("heading", { name: "About" });
    expect(eleRef).toBeInTheDocument();
  });
  test("testing add function", async () => {
    render(<About />);
    const ref = await screen.getByTestId("add");
    expect(ref.textContent).toBe("30");
  });
});
