import React from "react";

const FormSelect = ({ label, value, onChange, options, error }) => {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-1">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className={`w-full p-2 border ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">Select</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormSelect;
