import { Link } from 'react-router-dom';

import paymentIcon from '../../assets/icons/credit-card.svg';
import deliveryIcon from '../../assets/icons/delivery.svg';
import logOutIcon from '../../assets/icons/log-out.svg';
import menuIcon from '../../assets/icons/menu.svg';
import contactsIcon from '../../assets/icons/phone.svg';
import cartIcon from '../../assets/icons/shopping-cart.svg';

function NavMenu(props: { isLogged: boolean }) {
  const { isLogged } = props;
  return (
    <ul
      className="
        mt-2 
        flex 
        w-full 
        justify-between
        md:mt-8
        md:max-h-full
        md:flex-col
        md:items-end
        md:justify-start
        md:gap-6
        lg:mt-12
        "
    >
      <li className="navMenuItem">
        <Link to="/" className="navMenuLink text-text-grey">
          <img src={menuIcon} alt="" className="navMenuIcon md:inline-block" />
          Our&nbsp;menu
        </Link>
      </li>
      <li className="navMenuItem lg:hidden">
        <Link to="/cart" className="navMenuLink text-text-grey">
          <img src={cartIcon} alt="" className="navMenuIcon md:inline-block" />
          Cart
        </Link>
      </li>
      <li className="navMenuItem">
        <Link to="/delivery" className="navMenuLink text-text-grey">
          <img src={deliveryIcon} alt="" className="navMenuIcon md:inline-block" />
          Delivery
        </Link>
      </li>
      <li className="navMenuItem">
        <Link to="/payment" className="navMenuLink text-text-grey">
          <img src={paymentIcon} alt="" className="navMenuIcon md:inline-block" />
          Payment
        </Link>
      </li>
      <li className="navMenuItem">
        <Link to="/about" className="navMenuLink text-text-grey">
          <img src={contactsIcon} alt="" className="navMenuIcon md:inline-block" />
          Contacts
        </Link>
      </li>
      {isLogged && (
        <li className="navMenuItem hidden md:absolute md:bottom-6 md:block">
          <button type="button" className="navMenuLink text-text-dark">
            <img src={logOutIcon} alt="" className="navMenuIcon md:inline-block" />
            Log out
          </button>
        </li>
      )}
    </ul>
  );
}

export default NavMenu;