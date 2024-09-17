import { Outlet } from 'react-router-dom';
import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './layout.module.scss';
// import { motion, AnimatePresence } from 'framer-motion'; // Импортируем анимации

const cx = classNames.bind(styles);

// Определение анимаций для плавного появления/исчезновения
// const fadeTransition = {
//   in: { opacity: 1 }, // Плавное появление
//   out: { opacity: 0.8 }, // Плавное исчезновение
// };

const Layout = () => {
  const [bodyHeight, setBodyHeight] = useState(0);
  const [loc, setLoc] = useState('');
  const location = useLocation();

  useEffect(() => {
    const updateBodySize = () => {
      setBodyHeight(document.body.offsetHeight); // Получаем высоту body
    };

    // Устанавливаем начальный размер
    updateBodySize();

    window.addEventListener('load', updateBodySize);
  }, []);

  useEffect(() => {
    // Проверяем, если текущий путь равен '/home', заменяем его на '/understanding'
    if (location.pathname === '/') {
      setLoc('https://inner-cereal.vercel.app/understanding');
    } else if (location.pathname === '/understanding') {
      setLoc('https://inner-cereal.vercel.app/');
    } else {
      setLoc(location.pathname);
    }
  }, [location]);

  return (
    <>
      <Header />
      <main>
        {/* Анимация при смене страниц */}
        {/* <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname} // Уникальный ключ для каждой страницы
            initial='out' // Начальное состояние для выхода
            animate='in' // Состояние для входа
            exit='out' // Состояние для выхода
            variants={fadeTransition} // Анимация плавного появления/исчезновения
            transition={{ duration: 0.2 }} // Длительность анимации
          > */}
        <Outlet />
        {/* </motion.div>
        </AnimatePresence> */}
      </main>
      <Footer />
      <div className={cx('absolute')}>
        <iframe
          id='inlineFrameExample'
          title='Inline Frame Example'
          style={{
            border: 'none',
            width: '100%',
            height: `${bodyHeight}px`,
            overflow: 'hidden',
          }}
          allow='fullscreen'
          src={`${loc}`}
          loading='lazy'
          sandbox='allow-same-origin allow-scripts'
          scrolling='no'
        ></iframe>
      </div>
    </>
  );
};

export default Layout;
