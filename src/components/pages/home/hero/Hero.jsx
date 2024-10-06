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
            DESIGN MASTERPIECES ABOUND: A DESK BY THE NOW-FABLED CUBAN- BORN DESIGNER CLARA PORSET SITS NEAR A THICK
            WOOLLEN RUG.
          </p>
          <p>
            MADE BY THE FAMILY WHO WOVE FOR THE MEXICAN ARCHITECT LUÍS BARRAGÁN. her as I look around, seems as much{' '}
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
        <h1 className={cx('title')}>Matter of Discovery</h1>

        <MotionSvg />
        <div className={cx('wrapper-text')}>
          <h3 className={cx('title-min')}>A CONVERSATION WITH SU WU</h3>
          <p className={cx('text-margin')}>
            Su Wu is smoking Vogues from the window of her house in Roma Norte, Mexico City, a grand building from the
            early 1920s in art nouveau-inspired style. She is looking out over her courtyard, a mantelpiece glowing in
            the sun behind her.
          </p>
          <p className={cx('text-right')}>
            Its surface is covered with small sculptures lined up like votive offerings. The space, I tell her as I look
            around, seems as much like a gallery as a home. Stubbing her cigarette in an ashtray beneath her – a smooth,
            crafted object, shell-like – she laughs. In a way, both statements are true.
          </p>
          <p>
            Its surface is covered with small sculptures lined up like votive offerings. The space, I tell her as I look
            around, seems as much like a gallery as a home. Stubbing her cigarette in an ashtray beneath her – a smooth,
            crafted object, shell-like – she laughs. In a way, both statements are true.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
