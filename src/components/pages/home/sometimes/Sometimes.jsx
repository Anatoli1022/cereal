import classNames from 'classnames/bind';
import styles from './Sometimes.module.scss';
import greenhouse from '../../../../assets/greenhouse.webp';

const cx = classNames.bind(styles);

const Sometimes = () => {
  return (
    <section className={cx('sometimes')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>
          “Sometimes my home becomes a gallery,” she says, entering her living
          room. She gestures to a canvas by the Zapotec painter Francisco
          Toledo. “This one is due to show in an exhibition in my house soon”
        </h2>{' '}
        <div className={cx('wrapper-string')}>
          <span>Roma Norte</span> <span>art nouveau-inspired style</span>
        </div>
        <div className={cx('wrapper-text')}>
          <h3 className={cx('title-min')}>When I ask if she doesn’t fear</h3>
          <p className={cx('text-margin')}>
            Its surface is covered with small sculptures lined up like votive
            offerings. The space, I tell her as I look around, seems as much
            like a gallery as a home. Stubbing her cigarette in an ashtray
            beneath her – a smooth, crafted object, shell-like – she laughs. In
            a way, both statements are true.
          </p>
          <p className={cx('text-right')}>
            Wu is a mother of two and a polymath with an eye for pared-back
            beauty and a knack for composing intelligent prose. She moved to
            Mexico five years ago from New York City by way of Joshua Tree and
            continues to write for the New York publishing scene.
          </p>
          <p>
            including T Magazine and N+1, where she is arts editor. More
            recently, she has taken to curating for Masa Galeria, a nomadic
            gallery that showcases minimalist art and design in the US and Latin
            America. Her personal collection is vast.
          </p>
          <p className={cx('text-right')}>
            the pieces displayed throughout the residence are just one small
            fraction of what she owns.
          </p>
        </div>
        <img src={greenhouse} alt="" loading="lazy" className={cx('image')} />
        <p className={cx('image-text')}>
          Beside the home’s present, Wu is conscious of its past.
        </p>
      </div>
    </section>
  );
};

export default Sometimes;
