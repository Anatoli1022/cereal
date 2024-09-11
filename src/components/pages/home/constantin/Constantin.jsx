import classNames from 'classnames/bind';
import styles from './Constantin.module.scss';
import windowImage from '../../../../assets/window.webp';
import lamp from '../../../../assets/lamp.webp';
const cx = classNames.bind(styles);

const Constantin = () => {
  return (
    <section className={cx('constantin')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>Constantin Brâncuși</h2>
        <div className={cx('wrapper-text')}>
          <p>
            It is strange to think that the items around us will soon be hidden
            from sight. Design masterpieces abound: a desk by the now-fabled
            Cuban-born designer Clara Porset sits near a thick woollen rug.
          </p>
          <p className={cx('text-right')}>
            made by the family who wove for the Mexican architect Luís Barragán.
            Gifts from <br /> artist friends and colleagues are dotted between
            sculptures created by Wu’s husband, sculptor Alma Allen, whose
            abstract creations might be likened to the <br /> early-20th-century
            forms of Constantin Brâncuși.
          </p>
        </div>
        <ul className={cx('list')}>
          <li>
            <img src={windowImage} alt="" loading="lazy" />
            <p className={cx('image-text')}>
              Beside the home’s present, Wu is conscious of its past.
            </p>
          </li>
          <li>
            <img src={lamp} alt="" />
            <p className={cx('image-text')}>
              the Mexican architect Luís Barragán. Gifts from artist friends
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Constantin;
