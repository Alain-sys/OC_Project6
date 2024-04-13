import { useParams } from 'react-router-dom';
import DropDown from '../../components/Dropdown';
import Rating from '../../components/Rating';
import Slider from '../../components/Slider';
import accommodationsDatas from '../../data/logements.json';

function Accommodation() {
  const { id } = useParams();
  const accommodation = accommodationsDatas.find((acc) => acc.id === id);
  const [firstName, lastName] = accommodation.host.name.split(' ');

  return (
    <main>
      {accommodation.pictures || accommodation.pictures.length > 0 ? (
        <Slider accommodationImageList={accommodation.pictures} />
      ) : (
        <span></span>
      )}
      <div className="accommodation-description">
        <div className="accommodation-description__headline">
          <h1 className="accommodation-description__title">
            {accommodation.title}
          </h1>
          <p className="accommodation-description__location">
            {accommodation.location}
          </p>
          <div className="accommodation-description__tags-container">
            {accommodation.tags.map((tag, index) => (
              <span key={index} className="accommodation-description__tags">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="accommodation-description__details">
          <div className="accommodation-description__stars-container">
            <Rating
              rating={parseInt(accommodation.rating, 10)}
              totalStars={5}
            />
          </div>
          <div className="accommodation-description__host-container">
            <div className="accommodation-description__host-name">
              <p className="accommodation-description__host-first-name">
                {firstName}
              </p>
              <p className="accommodation-description__host-last-name">
                {lastName}
              </p>
            </div>

            <img
              className="accommodation-description__host-picture"
              src={accommodation.host.picture}
              alt="photo de l'hôte"
            />
          </div>
        </div>
      </div>
      <div className="accommodation-drop-down-container">
        <DropDown title="Description" content={accommodation.description} />
        <DropDown
          title="Équipements"
          list={true}
          content={accommodation.equipments}
        />
      </div>
    </main>
  );
}

export default Accommodation;
