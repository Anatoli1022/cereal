import Hero from '../components/pages/home/hero/Hero';
import Sometimes from '../components/pages/home/sometimes/Sometimes';
import Constantin from '../components/pages/home/constantin/Constantin';
import Space from '../components/pages/home/space/Space';
import Articles from '../components/shared/articles/Articles';

const Home = () => {
  return (
    <div>
      <Hero />
      <Sometimes />
      <Constantin />
      <Space />
      <Articles />
    </div>
  );
};

export default Home;
