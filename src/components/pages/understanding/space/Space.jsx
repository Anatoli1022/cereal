import classNames from 'classnames/bind';
import styles from './Space.module.scss';
import state from '../../../../assets/state.webp';
const cx = classNames.bind(styles);

const Space = () => {
  return (
    <section className={cx('space')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>
          “Schools have closed and we haven’t been able to meet face-to-face with our local communities, So instead we
          have invited our artists to visit the schools and create murals and sculptures in the playgrounds, so that
          when the children finally return, they will discover a completely new space. It will be a beautiful surprise.
          We have made interventions like this in 12 schools so far.”
        </h2>
        <div className={cx('wrapper-string')}>
          <span>Sodi Wabi</span> <span>designed the entire home using clay brickse</span>
        </div>
        <div className={cx('wrapper-text')}>
          <h3 className={cx('title-min')}>gradually developed in scope</h3>
          <p className={cx('text-margin')}>
            Since its founding in 2014, Casa Wabi has gradually developed in scope, particularly with additional
            pavilions by Kengo Kuma, Álvaro Siza and Alberto Kalach, as well as permanent art fixtures such as Sodi’s
            Los Atlantes (2019) – a 700-tonne grid of monumental clay cubes, built with a total of 102,400 traditionally
            fired and locally formed bricks.
          </p>
          <p className={cx('text-right')}>
            A more intimate addition to the site is a family home for Sodi, his wife and three children, a few hundred
            yards from the main Casa Wabi buildings, completed in 2019.
          </p>
          <p>
            Sodi designed the entire home using clay bricks, raw concrete, and thatched palm roofs; his wife, the
            co-founder of Mexico City design store Decada, designed the interiors, choosing entirely wooden furniture.
          </p>
          <h3 className={cx('subtitle', 'title-min')}>The programmes at Casa Wabi</h3>
          <p className={cx('text-margin')}>
            Two storeys will be added to the house, creating a new space for her and the family to live. Her side
            project, Casa Ahorita – a pop-up shop for art and design – will become a permanent fixture downstairs.
          </p>
          <p className={cx('text-right')}>
            But as a mother and dog-owner, she’s canny enough to bear in mind that “there’s nothing that can’t be
            cleaned or mended”.
          </p>
        </div>
        <img src={state} alt='' loading='lazy' className={cx('image')} />
        <p className={cx('sub-text')}>grandfather’s home state and one of the poorest in Mexico</p>
        <div className={cx('wrapper-text')}>
          <h3 className={cx('title-min')}>Casa Wabi is not only about giving back</h3>
          <p className={cx('text-margin')}>
            but also to give back to the international community of artists. “I think it is an obligation,” he says.
            “Being an artist is a very difficult job; it is not easy to succeed. I am very lucky to be able to live well
            on my work.
          </p>
          <p className={cx('text-right')}>
            I am conscious of that and want to help my fellow artists, to give back as much as possible – that, for me,
            is true happiness.”
          </p>
          <p>
            Bosco Sodi has shows at König Galerie, London from 12 October – 12 November 2021, and the Dallas Museum of
            Art, from September 14 2021 – July 10 2022.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Space;
