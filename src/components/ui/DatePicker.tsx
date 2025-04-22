import React from "react";

interface DatePickerProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
  minDate: string;
  maxDate: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
  minDate,
  maxDate,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="date-picker"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Select a date:
      </label>
      <input
        type="date"
        id="date-picker"
        className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
        min={minDate}
        max={maxDate}
      />
    </div>
  );
};

export default DatePicker;