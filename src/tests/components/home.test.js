import { render, cleanup } from "@testing-library/react";

import Home from "components/home";
import { setupTests } from "tests/setup";

describe("Testing Home Component", () => {
  beforeAll(() => setupTests());

  afterAll(() => cleanup());

  test("Header Renders", () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toBeDefined();
  });

  test("Title Text Exists", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Open Source Devs")).toBeInTheDocument();
    expect(getByText("Software Developers Making a Difference")).toBeInTheDocument();
  })
})