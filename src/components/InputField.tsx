import React from 'react';

export type InputFieldProps = {
  id: string;
  type: string;
  label: string;
  name: string;
  placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  name,
  type,
  placeholder,
}: InputFieldProps) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={label} className='text-sm font-semibold text-gray-500'>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none'
      />
    </div>
  );
};
