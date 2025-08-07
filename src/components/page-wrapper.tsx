import React from "react";
import { motion } from "framer-motion";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    variants={{
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, y: -50 },
    }}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.4, ease: "easeInOut" }}
    style={{ position: "absolute", width: "100%" }}
  >
    {children}
  </motion.div>
);

export default PageWrapper;
