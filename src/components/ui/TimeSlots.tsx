import React from "react";

interface TimeSlotsProps {
  timeSlots: string[];
  selectedTimeSlot: string;
  onTimeSlotSelect: (timeSlot: string) => void;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
  timeSlots,
  selectedTimeSlot,
  onTimeSlotSelect,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {timeSlots.map((slot, index) => (
        <button
          key={index}
          className={`py-1 px-3 text-sm rounded-full transition-transform duration-200 ${
            selectedTimeSlot === slot
              ? "bg-blue-500 text-white scale-105"
              : "bg-gray-100 text-gray-700 hover:scale-105"
          }`}
          onClick={() => onTimeSlotSelect(slot)}
          aria-label={`Select time slot ${slot}`}
          tabIndex={0}
        >
          {slot}
        </button>
      ))}
    </div>
  );
};

export default TimeSlots;