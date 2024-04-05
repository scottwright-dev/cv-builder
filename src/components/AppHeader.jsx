import PropTypes from 'prop-types';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import logo from '../assets/swiftcv-logo.svg';

function Header({ onPrint, onErase }) {
  return (
    <header className="rounded-xl bg-slate-200 p-4 md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h1>
          <img src={logo} alt="Swift CV" className="h-auto w-24" />
        </h1>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <div>
          <ButtonSecondary text="Erase CV" onClick={onErase} />
        </div>
        <div className="ml-4">
          <ButtonPrimary text="Save CV" onClick={onPrint} />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onPrint: PropTypes.func.isRequired,
  onErase: PropTypes.func.isRequired,
};

export default Header;
