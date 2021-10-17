import { render, cleanup } from "@testing-library/react";

import DevCard from "components/dev-card";
import { setupTests } from "tests/setup";

describe("Dev Card Component", () => {
  beforeAll(() => setupTests());

  afterAll(() => cleanup());

  const profile = {
    githubUrl: "https://github.com/test-profile-that-does-not-exits",
    githubUsername: "test-non-existant-user",
    linkedinUrl: "https://www.linkedin.com/in/test-user/",
    photo: "https://avatars.githubusercontent.com/u/24866599",
    siteUrl: "https://www.test-site.com",
  };

  test("DevCard Renders", () => {
    const { container } = render(<DevCard profile={profile} />);

    expect(container.firstChild).toBeDefined();
  });

  test("Dev Card Renders Name and Photo", () => {
    const { getByRole, getByText } = render(<DevCard profile={profile} />);

    const nameElement = getByText(profile.githubUsername);
    expect(nameElement).toBeInTheDocument();

    const photoElement = getByRole("img");

    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toBeVisible();
  });

  test("Dev Card Renders All Links", () => {
    const { getAllByRole } = render(<DevCard profile={profile} />);

    const linkElements = getAllByRole("link");

    expect(linkElements.length).toBe(4);

    linkElements.map((link) => {
      expect(link.href).toBeDefined();
      expect(link.href).toBeString();
      expect(link).toBeVisible();

      return null;
    });
  });
});
