import classNames from 'classnames/bind';
import styles from './Sometimes.module.scss';
import pool from '../../../../assets/pool.webp';

const cx = classNames.bind(styles);

const Sometimes = () => {
  return (
    <section className={cx('sometimes')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>
          ” Schlesser says of Hartung’s wife. But the two painters learned from one another. Her pieces, too, were
          abstract, lyrical, and played on light. Metallic foil in silver and gold is common in her work, catching and
          reflecting the colours around.”
        </h2>{' '}
        <div className={cx('wrapper-string')}>
          <span>Sodi Wabi</span>
          <span>designed the entire home using clay bricks</span>
        </div>
        <div className={cx('wrapper-text')}>
          <h3 className={cx('title-min')}>gaining a reputation</h3>
          <p className={cx('text-margin')}>
            Hartung was the most famous of the two, gaining a reputation in his lifetime for his abstract works.
          </p>
          <p className={cx('text-right')}>
            His painting was influenced by the Bauhaus mode, as well as Cubism – the latter style saw him thrown out of
            Nazi Germany for its liberal associations during the Second World War.
          </p>
          <p>
            His work from the 1950s onward was categorised as Tachisme, or Lyrical Abstraction, a European counterpoint
            to the Abstract Expressionists of New York.
          </p>
          <p className={cx('text-right')}>
            “Through the 1960s, both Hartung and Mark Rothko were concerned with the blur,” says Schlesser. The two
            corresponded, he says, and had “deep mutual respect.”
          </p>
        </div>
        <img src={pool} alt='' loading='lazy' className={cx('image')} />
        <p className={cx('image-text')}>The location has certainly affected Sodi’s practice</p>
      </div>
    </section>
  );
};

export default Sometimes;
