import React, { useState } from "react";
import Card from "../ui/Card";
import Filter from "../ui/Filter";
import { doctors } from "../../data/doctor";

const DirectoryView: React.FC = () => {
  const [specialityFilter, setSpecialityFilter] = useState<string>("");
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("");

  // Filtered doctors based on selected filters
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpeciality =
      specialityFilter === "" || doctor.speciality === specialityFilter;
    const matchesAvailability =
      availabilityFilter === "" || doctor.availability === availabilityFilter;
    return matchesSpeciality && matchesAvailability;
  });

  // Get unique specialities and availabilities for dropdown options
  const specialities = Array.from(new Set(doctors.map((doctor) => doctor.speciality)));
  const availabilities = Array.from(new Set(doctors.map((doctor) => doctor.availability)));
  
  return (
    <div
      className="flex flex-col justify-center items-center"
      role="main" 
      aria-labelledby="directory-title" 
    >
      {/* Title Section */}
      <h1
        id="directory-title"
        className="text-2xl font-bold text-gray-800 mb-6"
      >
        Doctor Directory
      </h1>

      {/* Filters Section */}
      <div
        className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6 w-full md:w-1/2 sm:w-3/4 sm:px-4"
        role="region" 
        aria-labelledby="filters-title" 
      >
        <h2 id="filters-title" className="sr-only">
          Filters
        </h2>

        {/* Speciality Filter */}
        <Filter
          label="Specialities"
          options={specialities}
          value={specialityFilter}
          onChange={setSpecialityFilter}
        />

        {/* Availability Filter */}
        <Filter
          label="Availabilities"
          options={availabilities}
          value={availabilityFilter}
          onChange={setAvailabilityFilter}
        />
      </div>

      {/* Grid Section */}
      {filteredDoctors.length > 0 ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:w-full"
          role="region" 
          aria-labelledby="results-title" 
        >
          <h2 id="results-title" className="sr-only">
            Search Results
          </h2>
          {filteredDoctors.map((doctor, index) => (
            <Card
              key={index}
              name={doctor.name}
              speciality={doctor.speciality}
              rating={doctor.rating}
              availability={doctor.availability}
              location={doctor.location}
              photo={doctor.photo}
            />
          ))}
        </div>
      ) : (
        <p
          className="text-gray-600 text-lg mt-6"
          role="alert" 
          tabIndex={0} 
        >
          No results found for {specialityFilter} {availabilityFilter}.
        </p>
      )}
    </div>
  );
};

export default DirectoryView;