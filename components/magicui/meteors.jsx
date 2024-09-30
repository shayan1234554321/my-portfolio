"use client";

import { useEffect, useState } from "react";

const Meteors = ({ number = 20 }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
      position: "absolute",
      width: "5px",
      height: "5px",
      backgroundColor: "#7B8794", // Replacing bg-slate-500
      borderRadius: "50%", // Replacing rounded-full
      boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.1)", // Replacing shadow
      transform: "rotate(215deg)", // Initial rotation
      animationName: "meteor", // Meteor animation
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      <style>
        {`
          @keyframes meteor {
            0% {
              transform: rotate(215deg) translateX(0);
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            100% {
              transform: rotate(215deg) translateX(-500px);
              opacity: 0;
            }
          }
        `}
      </style>
      {meteorStyles.map((style, idx) => (
        <span key={idx} style={style}>
          {/* Meteor Tail */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              height: "1px",
              width: "50px",
              transform: "translateY(-50%)",
              background: "linear-gradient(to right, #7B8794, transparent)", // Replacing bg-gradient-to-r
              zIndex: "-10",
            }}
          />
        </span>
      ))}
    </>
  );
};

export default Meteors;