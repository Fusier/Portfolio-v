import * as React from "react";
import "./resumeItem.scss";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

type ResumeItemProps = {
  title?: string;
  subTitle?: string;
  description?: string;
};

export default function ResumeItem({
  title,
  subTitle,
  description,
}: ResumeItemProps) {
  return (
    <motion.div
      className="resume-item"
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="resume-content">
        <h3>{title}</h3>
        <h4 className="sub-text">{subTitle}</h4>
        <p className="sub-text">{description}</p>
      </div>
    </motion.div>
  );
}
