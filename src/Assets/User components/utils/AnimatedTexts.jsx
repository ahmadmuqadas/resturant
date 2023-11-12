import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedTexts = () => {
  const texts = [
    'Open 24/7',
    'Cashless Payment',
    '30 Mins Delivery',
    'Call 3423424232'
  ];

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => (prev + 1) % texts.length);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [texts.length]); // Include texts.length in the dependency array to handle changes in the texts array

  return (
    <motion.p
      key={timer} // Use key to force remount on timer change
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "linear",
        duration: 1,
        x: { duration: 0.5 }
      }}
      className='motion-text'
    >
      {texts[timer]}
    </motion.p>
  );
};

export default AnimatedTexts;
