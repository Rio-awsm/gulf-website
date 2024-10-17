import React from 'react';

export const SliderInput = ({ min, max, step, value, onChange, label }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-[#024959]">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[1]}
        onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-600">{value[0].toLocaleString()} AED</span>
        <span className="text-sm text-gray-600">{value[1].toLocaleString()} AED</span>
      </div>
    </div>
  );
};