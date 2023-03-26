import "../nav/nav.scss";
import logoImage from "../../assets/img/LogoNav.png";
import { menu} from './menu'


function Nav() {
  return (
    <>
      <div className="container">
        <div className="navigation-container">
          <div className="logo-container">
            <img src={logoImage} alt="logo" className="logo" />
            <span>Organick</span>
          </div>
          <div className="navigation-items-container">
            <ul className="navigation-items">
              {menu.map((item, idx) => (
                <li key={`menu item ${idx}`} className="navigation-item">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="search-cart-container">
            <div className="search-container">
              <input
                type="text"
                // placeholder="Поиск товаров"
                className="search-input"
              />
              <button className="search-button"></button>
            </div>
            {/* <div className="cart-container">
              <img src="cart.png" alt="cart" className="cart-icon" />
              <span className="cart-count">0</span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
