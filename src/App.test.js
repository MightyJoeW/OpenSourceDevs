import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home content', () => {
  render(<App />);
  expect(screen.getAllByRole('link', { name: 'About' })[0]).toBeInTheDocument();
  expect(
    screen.getAllByRole('heading', { name: 'Open Source Devs' })[0]
  ).toBeInTheDocument();
  expect(
    screen.getByText('Software Developers Making a Difference')
  ).toBeInTheDocument();
});
