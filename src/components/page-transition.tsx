import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type PageTransitionProps = {
  trigger: boolean;
  onDone: () => void;
};

const PageTransition: React.FC<PageTransitionProps> = ({ trigger, onDone }) => {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={onDone}
          className="fixed top-0 left-0 w-full h-full bg-black z-50 pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
