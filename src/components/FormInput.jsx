import React from "react";

const FormInput = ({ label, type, value, onChange, error, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 border ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormInput;
