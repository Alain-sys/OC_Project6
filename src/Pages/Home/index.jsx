// @ts-ignore image path
import BannerHeaderImage from '../../assets/banner/header-banner.png';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import accommodationsDatas from '../../data/logements.json';

function HomePage() {
  return (
    <main className="main-home">
      <Banner bannerImage={BannerHeaderImage} title={true} />
      <section className="location">
        {accommodationsDatas.map((accommodation) => (
          <Card
            key={accommodation.id}
            accommodation={accommodation}
          />
        ))}
      </section>
    </main>
  );
}

export default HomePage;
