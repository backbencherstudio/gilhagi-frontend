"use client";

import React, { useEffect, useRef } from "react";
import "./ElectricityGauge.css"; // We'll create this CSS file

const ElectricityGauge = ({
  percentage = 80,
  minLabel = "0kwh",
  maxLabel = "4000kwh",
}) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Animate the progress bar when component mounts or percentage changes
    if (progressBarRef.current) {
      const targetPercentage = Math.min(Math.max(percentage, 0), 100); // Clamp between 0-100
      const offsetValue = 100 - targetPercentage;

      // Slight delay to ensure transition plays visibly
      const timer = setTimeout(() => {
        if (progressBarRef.current) {
          (progressBarRef.current as SVGPathElement).style.strokeDashoffset =
            offsetValue.toString();
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [percentage]);

  return (
    <div className="card">
      <div className="gauge-wrapper">
        <svg className="gauge-svg" viewBox="0 0 200 200">
          {/* Gray Background Track (270 degree arc) */}
          <path
            className="gauge-bg"
            d="M 39.9 160.1 A 85 85 0 1 1 160.1 160.1"
          />

          {/* Inner Dotted Track */}
          <path
            className="gauge-ticks"
            d="M 57.6 142.4 A 60 60 0 1 1 142.4 142.4"
          />

          {/* Blue Progress Bar */}
          <path
            ref={progressBarRef}
            className="gauge-progress"
            d="M 39.9 160.1 A 85 85 0 1 1 160.1 160.1"
            pathLength="100"
          />
        </svg>

        {/* Lightning Center */}
        <div className="gauge-center">
          <div className="lightning-icon">
            <svg viewBox="0 0 24 24" className="bolt bolt-layer-3">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <svg viewBox="0 0 24 24" className="bolt bolt-layer-2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <svg viewBox="0 0 24 24" className="bolt bolt-layer-1">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="labels">
        <span className="label">{minLabel}</span>
        <span className="label"> ~ {maxLabel}</span>
      </div>
    </div>
  );
};

export default ElectricityGauge;