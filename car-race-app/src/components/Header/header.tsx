import ActionButtons from './ActionButtons/ActionButtons';
import PagesLinks from './PagesLinks/PagesLinks';
// import Logo from '@src/widgets/header/logo/Logo';

function Header() {
  return (
    <header className="header">
      <PagesLinks />
      <ActionButtons />
    </header>
  );
}

export default Header;
