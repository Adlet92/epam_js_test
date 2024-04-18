import { FaPlay, FaUndo } from 'react-icons/fa';
import Button from 'src/components/CommonComponents/Buttons/Button';
import 'src/components/Header/ActionButtons/ActionButtons.css';

function ActionButtons() {
  return (
    <div className="action-buttons">
      <div className="race-reset-buttons">
        <Button color="lightgreen" icon={<FaPlay />}>RACE</Button>
        <Button color="purple" icon={<FaUndo />}>RESET</Button>
      </div>
      <div className="create-form">
        <div className="car-input">
          <input type="text" id="carName" placeholder="TYPE CAR BRAND" />
        </div>
        <div className="car-input">
          <input type="color" id="carColor" />
        </div>
        <Button color="purple">CREATE</Button>
      </div>
      <div className="update-form">
        <div className="car-input">
          <input type="text" id="carName" placeholder="TYPE CAR BRAND" />
        </div>
        <div className="car-input">
          <input type="color" id="carColor" />
        </div>
        <Button color="purple">UPDATE</Button>
      </div>
      <div className="generate-car-form">
        <Button color="lightgreen">GENERATE CAR</Button>
      </div>
    </div>
  );
}

export default ActionButtons;
