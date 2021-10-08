import { render, cleanup } from "@testing-library/react";

import User from "components/user";
import { setupTests } from "tests/setup";

describe("User Component", () => {
  beforeAll(() => setupTests());

  afterAll(() => cleanup());

  test("User Renders", () => {
    const { container } = render(<User />);

    expect(container.firstChild).toBeDefined();
  });

  test("Username renders", () => {
    const {getByRole} = render(<User username="test"/>);

    const usernameElement = getByRole("heading", {name: /test/i});

    expect(usernameElement).toBeDefined();
    expect(usernameElement).toBeVisible();
  })

  
});
