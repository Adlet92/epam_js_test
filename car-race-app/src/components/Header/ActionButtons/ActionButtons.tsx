import Button from 'src/components/CommonComponents/Buttons/Button';
import 'src/components/Header/ActionButtons/ActionButtons.css';

function ActionButtons() {
  return (
    <div className="action-buttons">
      <Button color="lightgreen">RACE</Button>
      <Button color="purple">RESET</Button>
      <div className="car-input">
        <input type="text" id="carName" placeholder="TYPE CAR BRAND" />
      </div>
      <div className="car-input">
        <input type="color" id="carColor" />
      </div>
      <Button color="purple">CREATE</Button>
      <div className="car-input">
        <input type="text" id="carName" placeholder="TYPE CAR BRAND" />
      </div>
      <div className="car-input">
        <input type="color" id="carColor" />
      </div>
      <Button color="purple">UPDATE</Button>
      <Button color="lightgreen">GENERATE CAR</Button>
    </div>
  );
}

export default ActionButtons;
