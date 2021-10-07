import { render, cleanup } from "@testing-library/react";

import Footer from "components/footer";
import { setupTests } from "tests/setup";

describe("Footer Component", () => {
  beforeAll(() => setupTests());

  afterAll(() => cleanup());

  test("Header Renders", () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toBeDefined();
  });

  test("Title Text Exists", () => {
    const { getByText} = render(<Footer />);

    expect(getByText("Open Source Devs")).toBeInTheDocument();
    expect(getByText("Want to contribute?")).toBeInTheDocument();
  })

  test("Clicking here Button", () => {
    // Needs testing
  })
})