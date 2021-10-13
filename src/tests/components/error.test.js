import { render, cleanup } from "@testing-library/react";

import Error from "components/error";
import { setupTests } from "tests/setup";

describe("Error Component", () => {
  beforeAll(() => setupTests());

  afterAll(() => cleanup());

  test("Error Renders", () => {
    const { container } = render(<Error />);

    expect(container.firstChild).toBeDefined();
  });

  test("Text with OOps", () => {
    const {getByText} = render(<Error />);

    const errorElement = getByText(/oops/i);

    expect(errorElement).toBeVisible();
  })

  test("Check Homepage Link", () => {
    const { getByRole } = render(<Error />);

    const linkElement = getByRole("link", {hidden: true});

    expect(linkElement).toBeVisible();
    expect(linkElement.href).toBeDefined();
  })
})