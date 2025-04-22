import React from "react";
import { useAppointments } from "../../contexts/AppointmentsContext.tsx";

// Define the Appointment type
type Appointment = {
  doctorName: string;
  speciality: string;
  date: string;
  time: string;
};

const AppointmentsView: React.FC = () => {
  const { appointments, setAppointments } = useAppointments(); 

  // Function to handle appointment cancellation
  const handleCancel = (index: number) => {
    setAppointments((prev) => prev.filter((_, i) => i !== index)); 
  };

  return (
    <div
      role="main" 
      aria-labelledby="appointments-title" 
    >
      {/* Title Section */}
      <h2
        id="appointments-title"
        className="text-2xl font-bold mb-4"
      >
        Appointments Summary
      </h2>

      {/* Appointments List */}
      <ul
        className="space-y-4" 
        role="list" 
        aria-label="List of confirmed appointments" 
      >
        {appointments.map((appointment: Appointment, index: number) => (
          <li
            key={index}
            className="p-4  rounded-lg shadow-lg bg-white flex justify-between items-center"
            role="listitem" 
            aria-labelledby={`appointment-title-${index}`} 
            aria-describedby={`appointment-details-${index}`} 
            tabIndex={0} 
          >
            <div>
              <h3
                id={`appointment-title-${index}`}
                className="text-lg font-bold"
              >
                {appointment.doctorName}
              </h3>
              <div
                id={`appointment-details-${index}`}
                className="text-sm text-gray-600"
              >
                <p>
                  <span className="font-semibold">Speciality:</span>{" "}
                  {appointment.speciality}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {appointment.date}
                </p>
                <p>
                  <span className="font-semibold">Time:</span> {appointment.time}
                </p>
              </div>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              aria-label={`Cancel appointment with ${appointment.doctorName} on ${appointment.date} at ${appointment.time}`} 
              tabIndex={0} 
              onClick={() => handleCancel(index)} 
            >
              Cancel
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsView;