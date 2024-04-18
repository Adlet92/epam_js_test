import Button from 'src/components/CommonComponents/Buttons/Button';
import carIcon from 'src/components/Header/logo/icons/coupe_car.svg';
import 'src/components/TrackComponents/Track/Track.css';

function Track() {
  return (
    <li className="track__item">
      <div className="track__race">
        <div className="road">
          <div className="buttons">
            <div className="column">
              <Button color="lightgreen">SELECT</Button>
              <Button color="purple">REMOVE</Button>
            </div>
            <div className="column">
              <Button color="lightgreen">A</Button>
              <Button color="purple">B</Button>
            </div>
            <div className="car-column">
              <img src={carIcon} alt="Car" className="car-icon" />
            </div>
            <div className="start-line" />
          </div>
          <div className="finish-line" />
        </div>
      </div>
    </li>
  );
}

export default Track;
