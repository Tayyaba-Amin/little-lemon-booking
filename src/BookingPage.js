import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const fetchTimes = (date) => {
  // Mock API call
  return ["17:00", "18:00", "19:00"];
};

const reducer = (state, action) => {
  if (action.type === 'UPDATE_DATE') {
    return fetchTimes(action.date);
  }
  return state;
};

const BookingPage = () => {
  const [times, dispatch] = useReducer(reducer, []);

  const submitForm = (data) => {
    console.log("Booking submitted:", data);
    // Replace with actual API call
  };

  return (
    <main>
      <BookingForm 
        availableTimes={times}
        submitForm={submitForm}
      />
    </main>
  );
};

export default BookingPage;