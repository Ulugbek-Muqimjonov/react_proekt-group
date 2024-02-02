import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__wrap">
        <div className="container">
          <a className="logo" href="/">
            <img className="logo-img" src="./src/assets/logo.svg" alt="logo" />
          </a>
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Overview
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Tickets
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Ideas
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Contact
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Agents
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Articles
              </a>
            </li>
          </ul>
        </div>
        <hr className="line" />
        <div className="container">
          <ul className="navbar__list navbar__list--2">
            <li className="navbar__item navbar__item--2">
              <a className="navbar__link" href="#">
                Settings
              </a>
            </li>
            <li className="navbar__item navbar__item--2">
              <a className="navbar__link" href="#">
                Subscription
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
