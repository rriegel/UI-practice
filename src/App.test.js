import { render, screen } from '@testing-library/react';
import App from './App';

test('renders global stats text', () => {
  render(<App />);
  const globalElement = screen.getByText(/global stats today/i);
  expect(globalElement).toBeInTheDocument();
});
