import classNames from 'classnames/bind';
import styles from './Articles.module.scss';
import { data } from './data';

const cx = classNames.bind(styles);

const Articles = () => {
  return (
    <section className={cx('articles')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>other articles</h2>

        <ul className={cx('list')}>
          {data.map((item, i) => {
            return (
              <li key={i}>
                <h3 className={cx('title-image')}>{item.title}</h3>
                <img src={item.image} className={cx('image')} alt={item.title} />
                <p className={cx('text-image')}>{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Articles;
