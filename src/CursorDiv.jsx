import React, { useState, useEffect } from "react";

const CursorDiv = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: cursorPosition.y,
    left: cursorPosition.x,
    width: "50px",
    height: "50px",
    backgroundColor: "rgba(255, 240, 100, 0.7)",
    borderRadius: "50%",
    pointerEvents: "none", // Ensures it doesn't block other elements
    transform: "translate(-50%, -50%)", // Centers the div
    zIndex: 9999,
  };

  return <div style={cursorStyle}>click Me</div>;
};

export default CursorDiv;
