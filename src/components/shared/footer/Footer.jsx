import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer-container', 'container')}>
        <div className={cx('form-wrapper')}>
          <h2 className={cx('title')}>NEWSLETTER</h2>
          <form action="submit" className={cx('form')}>
            <input
              type="text"
              className={cx('input')}
              placeholder="youremail@mail.com"
            />
            <button className={cx('button-form')}>Submit</button>
            <p className={cx('form-text')}>
              <span>I’ve read and accept the</span>
              <Link href="/" className={cx('form-link')}>
                terms and conditions.
              </Link>
            </p>
          </form>
        </div>

        <div className={cx('wrapper-list')}> 
          <ul className={cx('list')}>
            <li>
              <h2 className={cx('title')}>INFO</h2>
              <Link href="/" className={cx('link')}>
                Stockists
              </Link>
              <Link href="/" className={cx('link', 'max-w-contact')}>
                Contact
              </Link>
              <Link href="/" className={cx('link', 'max-w-career')}>
                Career
              </Link>
            </li>
            <li>
              <h2 className={cx('title')}>MEDIA</h2>
              <Link href="/" className={cx('link', 'max-w-playlist')}>
                Playlists
              </Link>

              <Link href="/" className={cx('link', 'max-w-films')}>
                Films
              </Link>
            </li>
            <li>
              <h2 className={cx('title')}>WEBSITE</h2>
              <Link href="/" className={cx('link', 'max-w-terms')}>
                Terms
              </Link>

              <Link href="/" className={cx('link', 'max-w-shopping')}>
                Shipping
              </Link>
              <Link href="/" className={cx('link', 'max-w-faqs')}>
                FAQs
              </Link>
            </li>
          </ul>
          <p className={cx('text')}>
            Cereal is a biannual, travel & style magazine based in the United
            Kingdom. Each issue focusses on a select number of destinations,
            alongside engaging interviews and stories on unique design, art, and
            fashion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
