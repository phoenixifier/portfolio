import { motion } from 'framer-motion';
import React from 'react';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition: React.FC = () => {
  return (
    <>
      <motion.div
        className="fixed inset-y-0 right-full z-30 h-screen w-screen bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      >
        1
      </motion.div>
      <div>2</div>
      <div>3</div>
    </>
  );
};

export default Transition;
