// @ts-ignore image path
import BannerHeaderImage from '../../assets/banner/header-banner.png';
import Banner from '../../components/Banner';
import AccommodationCard from '../../components/Card';
import accommodationDatas from '../../data/logements.json';

function HomePage() {
  return (
    <main className="main-home">
      <Banner bannerImage={BannerHeaderImage} title={true} />
      <section className="location">
        {accommodationDatas.map((accommodation) => (
          <AccommodationCard
            key={accommodation.id}
            accommodation={accommodation}
          />
        ))}
      </section>
    </main>
  );
}

export default HomePage;
