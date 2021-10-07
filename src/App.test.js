import { render, cleanup } from '@testing-library/react';
import App from './App';

describe("App Page", () => {
  beforeAll(() => {
    const script = document.createElement('script');
    document.body.appendChild(script);
  })

  afterAll(() => cleanup());

  test("App Renders", () => {
    const { container } = render(<App />);

    expect(container.firstChild).toBeDefined();
    expect(container.firstChild.children.length).toBeGreaterThan(0);

  });
})