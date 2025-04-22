import React, { createContext, useContext, useState, ReactNode } from "react";
import { appointments } from "../data/appointments";

interface Appointment {
  doctorName: string;
  speciality: string;
  date: string;
  time: string;
}

interface AppointmentsContextType {
  appointments: Appointment[];
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
}

const AppointmentsContext = createContext<AppointmentsContextType | undefined>(undefined);

export const AppointmentsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appointmentsState, setAppointments] = useState<Appointment[]>(appointments);

  return (
    <AppointmentsContext.Provider value={{ appointments: appointmentsState, setAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  );
};

export const useAppointments = (): AppointmentsContextType => {
  const context = useContext(AppointmentsContext);
  if (!context) {
    throw new Error("useAppointments must be used within an AppointmentsProvider");
  }
  return context;
};