import React from "react";

interface IInput extends React.ComponentProps<"input"> {
  title: string;
  error?: string;
}

const Input: React.FC<IInput> = ({ title, error, ...rest }) => {
  return (
    <div className="w-9/12 md:w-2/6 mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        <span>{title}</span>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="AnasRRaza"
          {...rest}
        />
      </label>
      <p className="flex my-2 text-sm text-red-500">{error}</p>
    </div>
  );
};

export default Input;
