import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

// static Data testing

describe("Footer Component", () => {
  test("render correctly", async () => {
    render(<Footer />);
    expect(await screen.getByText(/belongs to Redla/)).toBeInTheDocument();
  });
});
