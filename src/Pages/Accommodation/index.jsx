import { useParams } from 'react-router-dom';
import Slider from '../../components/Slider';
import accommodationsDatas from '../../data/logements.json';

function Accommodation() {
  const { id } = useParams();
  const foundAccommodation = accommodationsDatas.find((acc) => acc.id === id);

  return (
    <main>
      {foundAccommodation.pictures || foundAccommodation.pictures.length > 0 ? (
        <Slider accommodationImageList={foundAccommodation.pictures} />
      ) : null}
      <div></div>
    </main>
  );
}

export default Accommodation;
