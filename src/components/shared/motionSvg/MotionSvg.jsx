import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const originalPath = `M928.62 1020.5C236.4 1020.5 353.85 454.1 1 94.3C1 733.06 950.61 650.22 928.62 2.49C258.39 740.54 626.85 949.37 928.62 1020.5Z`;

const getRandomCoordinate = (min, max) => Math.random() * (max - min) + min;

const generateRandomPath = () => {
  const fixedTopLeftX = 1;
  const fixedTopLeftY = 94.3;
  const fixedTopRightX = 928.62;
  const fixedTopRightY = 2.49;
  const fixedBottomRightX = 928.62;
  const fixedBottomRightY = 1020.5;

  const randomPointX1 = getRandomCoordinate(-200, 600);
  const randomPointY1 = getRandomCoordinate(-200, 1000);
  const randomPointX2 = getRandomCoordinate(-100, 800);
  const randomPointY2 = getRandomCoordinate(-100, 600);

  const randomControlX1 = getRandomCoordinate(-100, 600);
  const randomControlY1 = getRandomCoordinate(700, -50);
  const randomControlX2 = getRandomCoordinate(600, 750);
  const randomControlY2 = getRandomCoordinate(700, 0);

  return `M${fixedBottomRightX} ${fixedBottomRightY}C${randomPointX1} ${randomPointY1} ${randomPointX2} ${randomPointY2} ${fixedTopLeftX} ${fixedTopLeftY}C${randomControlX1} ${randomControlY1} ${randomControlX2} ${randomControlY2} ${fixedTopRightX} ${fixedTopRightY}C${randomControlX1} ${randomControlY1} ${randomControlX2} ${randomControlY2} ${fixedBottomRightX} ${fixedBottomRightY}Z`;
};
const MotionSvg = () => {
  const [randomPaths, setRandomPaths] = useState([
    originalPath,
    generateRandomPath(),
    generateRandomPath(),
    generateRandomPath(),
    generateRandomPath(),
    generateRandomPath(),
    originalPath,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomPaths([
        originalPath,
        generateRandomPath(),
        generateRandomPath(),
        generateRandomPath(),
        generateRandomPath(),
        generateRandomPath(),
        originalPath,
      ]);
    }, 32000);

    return () => clearInterval(interval);
  }, []);

  const pathVariants = {
    initial: {
      d: originalPath,
    },
    animated: {
      d: randomPaths,
      transition: {
        duration: 32,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.svg
      width='960.005371'
      height='1018.496094'
      viewBox='0 0 960.005 1021.5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <motion.path
        variants={pathVariants}
        initial='initial'
        animate='animated'
        stroke='#1A1A1A'
        strokeOpacity='1.000000'
        strokeWidth='2.000000'
      />
    </motion.svg>
  );
};

export default MotionSvg;
