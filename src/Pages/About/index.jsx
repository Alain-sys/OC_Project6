// @ts-ignore image path
import BannerAboutImage from '../../assets/banner/about-banner.png';
import Banner from '../../components/Banner';
import DropDown from '../../components/Dropdown';
import { DropDownDatas } from './aboutDatas';

function About() {
  return (
    <main className="main-about">
      <Banner bannerImage={BannerAboutImage} />
      <div className="drop-down-container">
        {DropDownDatas.map((data) => (
          <DropDown key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
    </main>
  );
}

export default About;
