import { render, screen } from '@testing-library/react';
import App from './App';

test('renders booking form with all fields', () => {
  render(<App />);
  
  // Required fields
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  
  // Optional fields
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
  
  // Submit button
  expect(screen.getByText(/book table/i)).toBeInTheDocument();
});