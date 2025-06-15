import React from "react";
import BookingForm from "./BookingForm";

function App() {
  const [availableTimes, setAvailableTimes] = React.useState([
    "17:00", "18:00", "19:00", "20:00", "21:00"
  ]);

  return (
    <div>
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
}

export default App;