import { render, cleanup } from "@testing-library/react";

import Header from "components/navbar";
import { setupTests } from "tests/setup";

describe("Testing Header Component", () => {
  beforeAll(() => setupTests());

  afterAll(() => cleanup());

  test("Header Renders", () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toBeDefined();
  });

  test("Logo Text Exists", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Open Source Devs")).toBeInTheDocument();
  });

  test("About Link Exists", () => {
    const { getByText } = render(<Header />);

    expect(getByText("About")).toBeInTheDocument();
  });
});
