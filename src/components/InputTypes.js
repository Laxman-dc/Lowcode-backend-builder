import React from "react";

const InputTypes = ({ setInputType }) => {
  const inputOptions = [
    "Text",
    "Integer",
    "Object",
    "DB Reference (user_id)",
    "Enum",
    "Timestamp",
    "Date",
    "Boolean",
    "Decimal",
    "Email",
    "Password",
    "JSON",
    "Storage",
    "Geography",
  ];

  return (
    <div>
      <h3>Select Input Type</h3>
      <select onChange={(e) => setInputType(e.target.value)}>
        {inputOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputTypes;
