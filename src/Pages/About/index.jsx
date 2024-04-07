// @ts-ignore image path
import BannerAboutImage from '../../assets/banner/about-banner.png';
import Banner from '../../components/Banner';
import DropDown from '../../components/Dropdown';

const DropDownDatas = [
  {
    id: '0',
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale.  Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    id: '1',
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    id: '2',
    title: 'Service',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    id: '3',
    title: 'Sécurité',
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function About() {
  return (
    <main className="main-about">
      <Banner bannerImage={BannerAboutImage} />
      {DropDownDatas.map((data) => (
        <DropDown key={data.id} title={data.title} content={data.content} />
      ))}
    </main>
  );
}

export default About;
