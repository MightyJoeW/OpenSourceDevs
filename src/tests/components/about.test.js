import { render, cleanup } from "@testing-library/react";

import About from "components/about";
import { setupTests } from "tests/setup";

describe("About Component", () => {
  beforeAll(() => setupTests());

  afterAll(() => cleanup());

  test("About Renders", () => {
    const { container } = render(<About />);

    expect(container.firstChild).toBeDefined();
  });

  test("Main Test Exists & Visible", () => {
    const { getByRole } = render(<About />);

    const heading = getByRole("heading", { name: /open source devs/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  })

  test("Testing Links", () => {
    const { getAllByRole } = render(<About />);

    const links = getAllByRole('link');

    expect(links.length).toBe(6);

    links.map(link => {
      expect(link.href).toBeDefined();
      expect(link).toBeVisible();

      return null;
    })
  })
})