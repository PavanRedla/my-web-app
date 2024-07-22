import Home from "../Home/Home";
import { render, screen } from "@testing-library/react";

jest.mock("react-bootstrap/Carousel", () => {
  return {
    __esModule: true,
    default: () => {
      return <div>Carousel Component</div>;
    },
  };
});

describe("Home Component", () => {
  test("render correctly", async () => {
    render(<Home />);
    expect(await screen.getByText("Carousel Component")).toBeInTheDocument();
  });
});
