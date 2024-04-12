import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../../components/Slider';
import accommodationsDatas from '../../data/logements.json';

function Accommodation() {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    const foundAccommodation = accommodationsDatas.find((acc) => acc.id === id);
    setAccommodation(foundAccommodation);
  }, [id]);

  if (!accommodation) {
    return <div className="no-datas">Pas de données</div>;
  }
  console.log(accommodation, 'accommodation');
  return (
    <main>
      <Slider />
      <div></div>
    </main>
  );
}

export default Accommodation;
