import { Link } from 'react-router-dom';

function AccommodationCard({ accommodation }) {
  return (
    <Link to="" className="card-accommodation">
      <div className="card__decoration"></div>
      <img className="card__image" src={accommodation.cover} alt="logement" />
      <h2 className="card__title">{accommodation.title}</h2>
    </Link>
  );
}

export default AccommodationCard;
