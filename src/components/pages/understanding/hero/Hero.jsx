import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import MotionSvg from '../../../shared/motionSvg/MotionSvg';

const cx = classNames.bind(styles);

const Hero = () => {
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
        <MotionSvg />
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
