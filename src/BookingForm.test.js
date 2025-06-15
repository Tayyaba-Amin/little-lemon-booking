import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('shows error for empty name field', async () => {
    render(<BookingForm />);
    
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.blur(nameInput);
    
    await waitFor(() => {
      const errorMessages = screen.getAllByTestId('error-message');
      expect(errorMessages.some(msg => 
        msg.textContent.includes('Name is required')
      )).toBe(true);
    });
  });

  test('shows error for empty date field', async () => {
    render(<BookingForm />);
    
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.blur(dateInput);
    
    await waitFor(() => {
      const errorMessages = screen.getAllByTestId('error-message');
      expect(errorMessages.some(msg => 
        msg.textContent.includes('Date is required')
      )).toBe(true);
    });
  });
});