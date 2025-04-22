import React, { useState } from "react";
import BookingModal from "./BookingModal";

interface Doctor {
  name: string;
  speciality: string;
  rating: number;
  availability: string
  photo: string;
  location: string;
}
interface Appointment {
  doctorName: string;
  speciality: string;
  date: string;
  time: string;
}

const Card: React.FC<Doctor> = ({ name, speciality, rating, availability, photo, location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const handleConfirm = (time: string) => {
    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const date =
      availability === "today"
        ? today
        : availability === "tomorrow"
        ? tomorrow.toISOString().split("T")[0]
        : ""; // For "nextWeek", the date will be handled in the BookingModal

    setAppointments((prev) => [
      ...prev,
      { doctorName: name, speciality, date, time },
    ]);
    setIsModalOpen(false);
  };
   // Log the appointments to see the confirmed ones
  return (
    <div
      className="w-full sm:w-72 md:w-80 lg:w-96 rounded-xl overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      role="article"
      aria-labelledby={`doctor-name-${name}`}
      aria-describedby={`doctor-details-${name}`}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover object-top"
          src={photo}
          alt={`Photo of ${name}`}
        />
        <div
          className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow"
          aria-label={`Rating: ${rating} out of 5`}
        >
          ⭐ {rating} / 5
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6" id={`doctor-details-${name}`}>
        <h2
          id={`doctor-name-${name}`}
          className="text-xl font-bold mb-2 text-gray-800"
        >
          {name}
        </h2>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Speciality:</span> {speciality}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Availability:</span> {availability}
        </p>
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          onClick={() => setIsModalOpen(true)}
          aria-label={`Book an appointment with ${name}`}
        >
          Book Appointment
        </button>
      </div>

      {/* Booking Modal by pressing Book Appointment button */}
      {isModalOpen && (
        <BookingModal
          doctorName={name}
          speciality={speciality}
          timeSlots={["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"]}
          confirmedAppointments={appointments}
          availabilityFilter={availability}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default Card;