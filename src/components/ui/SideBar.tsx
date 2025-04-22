import React from "react";
import { FaUserMd, FaCalendarAlt } from "react-icons/fa";

interface SidebarProps {
  view: "directory" | "appointments";
  setView: (view: "directory" | "appointments") => void;
}

const Sidebar: React.FC<SidebarProps> = ({ view, setView }) => {
  return (
    <div
      className="w-20 bg-blue-500 flex flex-col items-center py-6 space-y-6 fixed h-full shadow-lg"
      role="navigation" 
      aria-label="Sidebar Navigation" 
    >
      {/* Button for Doctor Directory */}
      <button
        className={`w-12 h-12 flex items-center justify-center rounded-full ${
          view === "directory" ? "bg-white text-blue-500" : "bg-blue-400 text-white"
        } shadow-lg transition duration-300`}
        onClick={() => setView("directory")}
        aria-label="View Doctor Directory" 
        aria-pressed={view === "directory"} 
        tabIndex={0} 
      >
        <FaUserMd size={20} />
      </button>

      {/* Button for Appointments */}
      <button
        className={`w-12 h-12 flex items-center justify-center rounded-full ${
          view === "appointments" ? "bg-white text-blue-500" : "bg-blue-400 text-white"
        } shadow-lg transition duration-300`}
        onClick={() => setView("appointments")}
        aria-label="View Appointments" 
        aria-pressed={view === "appointments"} 
        tabIndex={0} 
      >
        <FaCalendarAlt size={20} />
      </button>
    </div>
  );
};

export default Sidebar;