import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { Skill } from "../utils/types";

const Bar: FunctionComponent<{ data: Skill }> = ({ data: { Icon, level, name } }) => {
  const bar_width = `${level}%`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <motion.div className="flex items-center px-4 py-1 rounded-full to-blue-600 bg-gradient-to-r from-green " style={{ width: bar_width }} variants={variants} initial="initial" animate="animate">
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
