import React from 'react';

interface ResponsiveTextFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  minRows?: number;
  maxRows?: number;
}

export function ResponsiveTextField({
  value,
  onChange,
  placeholder = '',
  label = '',
  minRows = 4,
  maxRows = 8,
}: ResponsiveTextFieldProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={minRows}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          text-base leading-relaxed resize-y
          min-h-[100px] max-h-[400px]
          transition-all duration-200 ease-in-out"
        style={{
          minHeight: `${minRows * 1.5}rem`,
          maxHeight: maxRows ? `${maxRows * 1.5}rem` : 'none',
        }}
      />
    </div>
  );
}