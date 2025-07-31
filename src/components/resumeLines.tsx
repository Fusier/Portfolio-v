import React from "react";
import { motion, MotionStyle } from "framer-motion";

const ResumeLines = () => {
  const pathStyle: MotionStyle = {
    stroke: "deepskyblue",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeDasharray: "600",
    fill: "none",
  };

  const animationProps = {
    initial: { strokeDashoffset: 600 },
    animate: { strokeDashoffset: 0 },
    transition: {
      duration: 2,
      ease: "easeInOut" as const,
    },
  };

  return (
    <svg
      width="100%"
      height="100vh"
      style={{
        position: "absolute",
        top: 2150,
        left: 40,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Line from top resume item */}
      <motion.path
        d="M 400 75 C 800 75, 1000 300, 1200 300"
        {...animationProps}
        style={pathStyle}
      />

      {/* Line from middle resume item */}
      <motion.path
        d="M 400 325 C 800 325, 1000 300, 1200 300"
        {...animationProps}
        style={pathStyle}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Line from bottom resume item */}
      <motion.path
        d="M 400 575 C 800 575, 1000 300, 1200 300"
        {...animationProps}
        style={pathStyle}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
      />
    </svg>
  );
};

export default ResumeLines;
