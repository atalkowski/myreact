import { render, screen } from '@testing-library/react';
import App from './App';

// Added to superficially test this App rendered
test('renders My react demo app', () => {
  render(<App />);
  const linkElement = screen.getByText(/My react demo app/i);
  expect(linkElement).toBeInTheDocument();
});
