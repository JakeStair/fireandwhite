import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app without crashing', () => {
  render(<App />);
const headings = screen.getAllByRole('heading');
expect(headings.length).toBeGreaterThan(0);

});

test('basic sanity check', () => {
  expect(true).toBe(true);
});
