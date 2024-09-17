import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

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

const Hero = () => {
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
    <section className={cx('hero')}>
      <div className={cx('container', 'hero-wrapper')}>
        <div className={cx('wrapper-text')}>
          <p className={cx('subtext-right')}>
            DESIGN MASTERPIECES ABOUND: A DESK BY THE NOW-FABLED CUBAN-
            <br />
            BORN DESIGNER CLARA PORSET SITS NEAR A THICK WOOLLEN RUG.
          </p>
          <p>
            MADE BY THE FAMILY WHO WOVE FOR THE MEXICAN ARCHITECT LUÍS BARRAGÁN. her as I look around, seems as much{' '}
            <br />
            like a gallery as a home. Stubbing her cigarette in an ashtray beneath
          </p>
          <div className={cx('wrapper-sub-text')}>
            <div>
              <h4 className={cx('subtitle')}>PHOTOS</h4>
              <span>Maureen M. Evans</span>
            </div>
            <div>
              <h4 className={cx('subtitle')}>WORDS</h4>
              <span>Louis Harnett O’Meara</span>
            </div>
          </div>
        </div>
        <h1 className={cx('title')}>Understanding</h1>
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
        <div className={cx('wrapper-text')}>
          <h3 className={cx('title-min')}>Casa Wabi</h3>
          <p className={cx('text-margin')}>
            This is Casa Wabi, an art foundation established by Mexican painter and sculptor Bosco Sodi and built by
            Tadao Ando in 2014.
          </p>
          <p className={cx('text-right')}>
            Emerging international artists are invited here for residencies, where they are encouraged to work on a
            project with one of the local communities. There is a gallery onsite with a separate programme of annual
            shows from established artists such as Daniel Buren and Izumi Kato, and a working studio used by Sodi and
            visiting artists.
          </p>
          <p>
            Nearby communities and schools visit each week to experience the art and architecture. “I believe that art
            is a tool to better understand the universe,” says Sodi.
          </p>
          <p>
            “And the better you understand the universe and your fellow human beings, the easier it is to improve
            things. The local communities are able to experience that which would otherwise be unavailable to them, and
            in turn, artists from across the world are able to alter their own perspectives by sharing a dialogue with
            these local people.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
