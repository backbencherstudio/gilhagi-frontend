import { useState } from "react";

interface SliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

export default function LaufzeitSlider({
  label,
  min,
  max,
  step,
  value,
  onChange,
}: SliderProps) {
  const [sliderValue, setSliderValue] = useState(value);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setSliderValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      {/* Label */}
      <label className="text-sm font-medium text-[#1C2022]">{label}</label>
      
      {/* Slider */}
      <div className="flex items-center gap-4 mt-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-2 bg-blue-300 rounded-lg"
        />
        <div className="text-[#085EC4] font-semibold">{sliderValue}</div>
      </div>

      {/* Slider Labels */}
      <div className="flex justify-between text-xs text-[#5F728B] mt-2">
        <span>{min}</span>
        <span>{Math.floor((max - min) / 2) + min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
