import { Link } from 'react-router-dom';
import arrowGreen from 'src/components/Header/logo/icons/arrowDoubleGreen.svg';
import arrowPink from 'src/components/Header/logo/icons/arrowDoublePink.svg';
import 'src/components/Header/PagesLinks/PagesLinks.css';

function PagesLinks() {
  return (
    <ul className="header__list">
      <li role="menuitem" className="header__item">
        <Link
          to="/"
          className="header__link header__link--garage"
        >
          GARAGE
        </Link>
        <img
          src={arrowGreen}
          alt=" Icon"
          className="icon"
          style={{ marginLeft: '50%' }}
        />
        <img
          src={arrowGreen}
          alt=" Icon"
          className="icon"
        />
        <img
          src={arrowGreen}
          alt=" Icon"
          className="icon"
        />
        <img
          src={arrowGreen}
          alt=" Icon"
          className="icon"
        />
      </li>
      <li role="menuitem" className="header__item">
        <Link
          to="/winners"
          className="header__link header__link--winners"
        >
          WINNERS
        </Link>
        <img
          src={arrowPink}
          alt=" Icon"
          className="icon"
          style={{ marginLeft: '5%' }}
        />
        <img
          src={arrowPink}
          alt=" Icon"
          className="icon"
        />
        <img
          src={arrowPink}
          alt=" Icon"
          className="icon"
        />
        <img
          src={arrowPink}
          alt=" Icon"
          className="icon"
        />
      </li>
    </ul>
  );
}

export default PagesLinks;
