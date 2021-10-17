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
    const { getByText } = render(<Footer />);

    expect(getByText("Open Source Devs")).toBeInTheDocument();
    expect(getByText("Want to contribute?")).toBeInTheDocument();
  });

  test("Clicking here Button", () => {
    const { getByRole } = render(<Footer />);

    const linkElement = getByRole("link", { name: "here" });

    expect(linkElement.href).toContain(
      "https://www.getscriptordietryin.com/contributing-to-open-source-starter-guide"
    );

    expect(linkElement.href).toInclude(
      "contributing-to-open-source-starter-guide"
    );
  });
});
