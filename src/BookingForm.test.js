import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const times = ["17:00", "18:00", "19:00"];

test("renders all form fields", () => {
  render(<BookingForm availableTimes={times} />);

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /book table/i })).toBeInTheDocument();
});

test("submits form with valid data", () => {
  render(<BookingForm availableTimes={times} />);

  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Tayyaba" } });
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2025-06-30" } });
  fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "17:00" } });
  fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: 2 } });

  fireEvent.click(screen.getByRole("button", { name: /book table/i }));

  expect(screen.getByText(/booking submitted successfully/i)).toBeInTheDocument();
});