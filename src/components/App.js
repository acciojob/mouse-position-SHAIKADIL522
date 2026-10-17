import React, { useState, useEffect } from "react";
import './../styles/App.css';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

const App = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      
      <p>The mouse position is: {x}, {y}</p>
    </div>
  );
};

export default App;