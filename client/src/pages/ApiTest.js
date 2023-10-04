import React, { useState, useEffect } from 'react';
import './Gauge.css'; // You'll need to define your CSS styles

function Gauge() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Function to increment the gauge width
    const incrementGauge = () => {
      if (width < 100) {
        setWidth((prevWidth) => prevWidth + 1);
      }
    };

    // timer will = the number set to increments example 25 is 2.5 seconds for the bar to fill
    const timer = setInterval(incrementGauge, 25);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [width]);

  const handleReset = () => {
    // Reset the gauge width to 0 when the button is clicked
    setWidth(0);
  };

  return (
    <>
    <div className="gaugeContainer">
      <div className="gaugeFill" style={{ width: `${width}%` }}>
        <div className="gaugeContent">
          {`${width}%`}
        </div>
      </div>
    </div>
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  );
}

export default Gauge;
