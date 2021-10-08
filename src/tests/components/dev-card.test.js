import { render, cleanup } from "@testing-library/react";

import DevCard from "components/dev-card";
import { setupTests } from "tests/setup";

describe("Dev Card Component", () => {
  beforeAll(() => setupTests());

  afterAll(() => cleanup());

  // test("DevCard Renders", () => {
  //   const { container } = render(<DevCard />);

  //   expect(container.firstChild).toBeDefined();
  // });
})