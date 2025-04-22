import React from "react";

interface Appointment {
  doctorName: string;
  speciality: string;
  date: string;
  time: string;
}

interface ConfirmedAppointmentsProps {
  appointments: Appointment[];
}

const ConfirmedAppointments: React.FC<ConfirmedAppointmentsProps> = ({
  appointments,
}) => {
  return (
    <div className="mt-6" aria-live="polite">
      <h3 className="text-lg font-bold mb-2">Confirmed Appointments</h3>
      {appointments.length > 0 ? (
        <ul
          className="space-y-2"
          role="list"
          aria-label="List of confirmed appointments"
        >
          {appointments.map((appointment, index) => (
            <li
              key={index}
              className="p-3 border rounded-lg bg-gray-50 shadow-sm"
              role="listitem"
              tabIndex={0}
            >
              <p className="text-sm font-semibold">
                Doctor: {appointment.doctorName}
              </p>
              <p className="text-sm text-gray-600">
                Speciality: {appointment.speciality}
              </p>
              <p className="text-sm text-gray-600">Date: {appointment.date}</p>
              <p className="text-sm text-gray-600">Time Slot: {appointment.time}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-600" tabIndex={0}>
          No confirmed appointments yet.
        </p>
      )}
    </div>
  );
};

export default ConfirmedAppointments;