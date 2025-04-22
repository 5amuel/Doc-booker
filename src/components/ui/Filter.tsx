import React from "react";

interface FilterProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ label, options, value, onChange }) => {
  const isExpanded = value !== ""; // Determine if the dropdown is expanded based on the selected value

  return (
    <div className="flex flex-col w-full">
      {/* Label for the dropdown */}
      <label
        htmlFor={`filter-${label}`} // Associate the label with the select element
        className="text-sm font-semibold text-gray-700 mb-2"
      >
        {label}
      </label>

      {/* Dropdown */}
      <select
        id={`filter-${label}`} // Unique ID for the select element
        className="p-1 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={`Filter by ${label}`} 
        role="combobox" 
        aria-expanded={isExpanded} 
        aria-controls={`filter-options-${label}`}
        aria-describedby={`filter-description-${label}`} 
        tabIndex={0} 
      >
        <option value="">All {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Description for screen readers */}
      <p
        id={`filter-description-${label}`} 
        className="sr-only"
      >
        Use this dropdown to filter by {label}.
      </p>
    </div>
  );
};

export default Filter;