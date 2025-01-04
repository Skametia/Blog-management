import React from "react";

const FormRadio = ({ label, name, options, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-1">{label}</label>
      {options.map((option, index) => (
        <label key={index} className="inline-flex items-center mr-4">
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            className="mr-2"
          />
          {option}
        </label>
      ))}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormRadio;
