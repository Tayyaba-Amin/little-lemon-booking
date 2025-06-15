import React from "react";

function BookingForm({ availableTimes }) {
  const [formData, setFormData] = React.useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.date && formData.time && formData.guests > 0) {
      setSubmitted(true);
      console.log("Booking Successful:", formData);
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <main>
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit} aria-label="Booking Form">
        <fieldset>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Date:</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select Time</option>
            {availableTimes.map((t, i) => (
              <option key={i} value={t}>{t}</option>
            ))}
          </select>

          <label htmlFor="guests">Guests:</label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
          />

          <button type="submit">Book Table</button>
        </fieldset>
        {submitted && <p>✅ Booking submitted successfully!</p>}
      </form>
    </main>
  );
}

export default BookingForm;