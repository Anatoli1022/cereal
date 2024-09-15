import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('container','header-container')}>
        <nav className={cx('navigation')}>
          <Link href="/" className={cx('link')}>cereal</Link>
          <Link href="/" className={cx('link')}>design</Link>
          <button className={cx('button')}></button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
