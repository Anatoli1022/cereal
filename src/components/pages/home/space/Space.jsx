import classNames from 'classnames/bind';
import styles from './Space.module.scss';
import space from '../../../../assets/space.webp';
const cx = classNames.bind(styles);

const Space = () => {
  return (
    <section className={cx('space')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>
          “We’ll exhibit everything here in this space,” she says, which means
          an assortment of pottery treasures from Oaxaca, as well as weighty
          jewellery from Wu’s artist friends and woollen cushions that she has
          made in collaboration with her friend Elise Durbec”
        </h2>
        <div className={cx('wrapper-string')}>
          <span>Roma Norte</span> <span>art nouveau-inspired style</span>
        </div>
        <div className={cx('wrapper-text')}>
          <h3 className={cx('title-min')}>fear a priceless vase</h3>
          <p className={cx('text-margin')}>
            When I ask if she doesn’t fear a priceless vase tumbling from its
            perch, Wu shakes her head. Of course, she tuts when Sugar, her
            Border-Collie mix, clambers onto the sofa with muddy paws.
          </p>
          <p className={cx('text-right')}>
            But as a mother and dog-owner, she’s canny enough to bear in mind
            that “there’s nothing that can’t be cleaned or mended”.
          </p>
          <p>
            Beside the home’s present, Wu is conscious of its past. “This was
            where William Borroughs stayed when he was living in Mexico,” she
            says. He met with a contingent of other beatniks passing through the
            neighbourhood, Jack Kerouac and Allen Ginsberg to name just two,
            However, Wu says she feels a closer affinity to Burroughs’ wife,
            whom he tragically killed in the city (“though not in this house,”
            she says with a detectable touch of relief). “She was a writer, a
            good friend and a degenerate – and her ghost is safe with me.”
          </p>
          <h3 className={cx('subtitle', 'title-min')}>plans are afoot</h3>
          <p className={cx('text-margin')}>
            Two storeys will be added to the house, creating a new space for her
            and the family to live. Her side project, Casa Ahorita – a pop-up
            shop for art and design – will become a permanent fixture
            downstairs.
          </p>
          <p className={cx('text-right')}>
            But as a mother and dog-owner, she’s canny enough to bear in mind
            that “there’s nothing that can’t be cleaned or mended”.
          </p>
        </div>
        <img src={space} alt="" loading="lazy" className={cx('image')}/>
        <p className={cx('sub-text')}>a pop-up shop for art and design</p>
        <div className={cx('wrapper-text')}>
          <h3 className={cx('title-min')}>decision-making process</h3>
          <p className={cx('text-margin')}>
            When I ask about the decision-making process for her selections, she
            explains that “it’s not so much commercial”.
          </p>
          <p className={cx('text-right')}>
            When it comes down to it, for Wu, collecting is a matter of
            discovering things she feels a connection with. Casa Ahorita is one
            way of letting others share in that.
          </p>
          <p>
            “It’s a very fortunate thing to be surrounded by objects made by the
            people we love,” she says.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Space;
