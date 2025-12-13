interface MonthSliderProps {
  value: number; // duration in months
  onChange: (duration: number) => void;
}

export default function MonthSlider({ value, onChange }: MonthSliderProps) {
  const steps = [1, 3, 6, 12, 24];
  const currentStep = steps.indexOf(value) !== -1 ? steps.indexOf(value) : 3; // Default to 12 months if value not in steps

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStepIndex = parseInt(e.target.value, 10);
    onChange(steps[newStepIndex]);
  };

  return (
    <div className=" max-w-md mx-auto">
      <div className="mb-8">
        {/* <h2 className="text-lg font-semibold text-gray-800 mb-6">Laufzeit in Monaten</h2> */}

        {/* Slider Container */}
        <div className="relative pt-1">
          {/* Step markers and labels */}
          <div className="relative mb-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className="absolute"
                style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
              >
                {/* Marker dot */}
                {/* <div
                  className={`w-4 h-4 rounded-full -ml-2 transition-all ${
                    index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                /> */}

                {/* Label */}
                <div className="absolute -ml-2 mt-6 text-sm font-medium text-gray-600">
                  {step < 10 ? `0${step}` : step}
                </div>
              </div>
            ))}
          </div>

          {/* Track background */}
          <div className="relative h-2 bg-gray-300 rounded-full" style={{ marginTop: '6px' }}>
            {/* Active track */}
            <div
              className="absolute  h-2 bg-blue-600 rounded-full transition-all"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Slider input */}
          <input
            type="range"
            min="0"
            max={steps.length - 1}
            value={currentStep}
            onChange={handleSliderChange}
            className="absolute w-full h-2 opacity-0 cursor-pointer"
            style={{ top: '6px' }}
          />

          {/* Thumb */}
          <div
            className="absolute w-5 h-5 bg-blue-600 rounded-full shadow-lg  pointer-events-none transition-all"
            style={{
              left: `calc(${(currentStep / (steps.length - 1)) * 100}% - 10px)`,
              top: '6px',
            }}
          />
        </div>
      </div>

      {/* Selected value display */}
      {/* <div className="text-center mt-12 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-600">Selected duration:</p>
        <p className="text-2xl font-bold text-blue-600">
          {steps[currentStep]} {steps[currentStep] === 1 ? 'Monat' : 'Monate'}
        </p>
      </div> */}
    </div>
  );
}
