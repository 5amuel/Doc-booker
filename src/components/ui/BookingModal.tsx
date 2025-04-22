import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useAppointments } from "../../contexts/AppointmentsContext";
import { getIncomingWeekRange } from "../../helpers/getNextWeek";
import DatePicker from "./DatePicker";
import TimeSlots from "./TimeSlots";
import ConfirmedAppointments from "./ConfirmedAppointments";

interface Appointment {
  doctorName: string;
  speciality: string;
  date: string;
  time: string;
}

interface BookingModalProps {
  doctorName: string;
  speciality: string;
  confirmedAppointments: Appointment[];
  timeSlots: string[];
  availabilityFilter: string;
  onClose: () => void;
  onConfirm: (time: string) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  doctorName,
  speciality,
  timeSlots,
  availabilityFilter,
  onClose,
}) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const { appointments, setAppointments } = useAppointments();
  const { nextMonday, nextFriday } = getIncomingWeekRange();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the click is on the overlay
    }
  };

  const handleConfirm = () => {
    const date =
      availabilityFilter === "Next Week"
        ? selectedDate
        : availabilityFilter === "Today"
        ? new Date().toISOString().split("T")[0]
        : availabilityFilter === "Tomorrow"
        ? (() => {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow.toISOString().split("T")[0];
          })()
        : "";
    if (selectedTimeSlot && date) {
      setAppointments((prev) => [
        ...prev,
        {
          doctorName,
          speciality,
          date,
          time: selectedTimeSlot,
        },
      ]);
      onClose(); // Close the modal after confirming
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* Background Overlay */}
      <div  onClick={handleOverlayClick} className="absolute inset-0 bg-black opacity-70" aria-hidden="true"></div>

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-4 z-10"
        tabIndex={0}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from propagating
      >
        <h2 id="modal-title" className="text-xl font-bold mb-4">
          Book Appointment
        </h2>
        <p id="modal-description" className="text-gray-700 mb-4">
          Select a time slot to book an appointment with {doctorName}.
        </p>

        {/* Date Picker for Incoming Week */}
        {availabilityFilter === "Next Week" && (
          <DatePicker
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            minDate={nextMonday.toISOString().split("T")[0]} // Minimum date is the Monday of the incoming week
            maxDate={nextFriday.toISOString().split("T")[0]} // Maximum date is the Friday of the incoming week
          />
        )}

        {/* Time Slots */}
        <TimeSlots
          timeSlots={timeSlots}
          selectedTimeSlot={selectedTimeSlot}
          onTimeSlotSelect={setSelectedTimeSlot}
        />
        {/* Confirm and Cancel Buttons */}
        <div className="flex justify-end space-x-4 mb-6">
          <button
            className="py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={onClose}
            aria-label="Cancel booking"
            tabIndex={0}
          >
            Cancel
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${
              selectedTimeSlot && (availabilityFilter !== "Next Week" || selectedDate)
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleConfirm}
            disabled={
              !selectedTimeSlot || (availabilityFilter === "Next Week" && !selectedDate)
            }
            aria-label={`Confirm booking for ${selectedTimeSlot || "no time selected"}`}
            tabIndex={selectedTimeSlot ? 0 : -1}
          >
            Confirm
          </button>
        </div>

        {/* Confirmed Appointments Section */}
        <ConfirmedAppointments appointments={appointments} />
      </div>
    </div>,
    document.body
  );
};

export default BookingModal;