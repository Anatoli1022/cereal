import classNames from 'classnames/bind';
import styles from './Constantin.module.scss';
// import windowImage from '../../../../assets/window.webp';
import beside from '../../../../assets/beside.webp';
const cx = classNames.bind(styles);

const Constantin = () => {
  return (
    <section className={cx('constantin')}>
      <div className={cx('container')}>
        {/* <h2 className={cx('title')}>Constantin Brâncuși</h2> */}
        {/* <div className={cx('wrapper-text')}>
          <p>
            It is strange to think that the items around us will soon be hidden from sight. Design masterpieces abound:
            a desk by the now-fabled Cuban-born designer Clara Porset sits near a thick woollen rug.
          </p>
          <p className={cx('text-right')}>
            made by the family who wove for the Mexican architect Luís Barragán. Gifts from <br /> artist friends and
            colleagues are dotted between sculptures created by Wu’s husband, sculptor Alma Allen, whose abstract
            creations might be likened to the <br /> early-20th-century forms of Constantin Brâncuși.
          </p>
        </div> */}
        <ul className={cx('list')}>
          {/* <li>
            <img src={windowImage} alt='' loading='lazy' className={cx('image')} />
            <p className={cx('image-text')}>Beside the home’s present, Wu is conscious of its past.</p>
          </li> */}
          <li>
            <img src={beside} alt='' loading='lazy' className={cx('image')} />
            <p className={cx('image-text')}>Beside the home’s present, Wu is conscious of its past.</p>
          </li>
        </ul>{' '}
        <div className={cx('wrapper-text')}>
          <h2 className={cx('title')}>Their home leaves traces of their story</h2>
          <p>
            The swimming pool suggests Hartung’s love of fitness; it also suggests a remedy to his lack of exercise
            after losing one of his legs fighting with the French foreign legion.
          </p>
          <p className={cx('text-right')}>
            Hartung and Bergman’s separate studios suggest different methods: while Hartung worked often under a neon
            glow through the night.
          </p>
          <p>
            Bergman preferred daylight. And the fact of the house’s existence is an ode to the pair’s final coming
            together. The two painters were married young but divorced in 1939, due to health complications and the War.
          </p>
          <p className={cx('text-right')}>
            They drew up plans for the home jointly, finally tasking an architect to execute them after they reunited
            and remarried in 1957.
          </p>
          <p>
            But understanding how the couple lived requires some guesswork. There are gaps in our knowledge. We can
            imagine them peering out at the sea; diving into the pool; working restlessly from their studios. The
            foundation encourages this. But still the outline is slight, a ghost of their lives. It is for us to
            interpret.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Constantin;
