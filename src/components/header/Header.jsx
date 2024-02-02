import "./header.css";
function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__wrap">
          <h1 className="site-header__title">Overview</h1>
          <div className="site-header__inner">
            <ul className="site-header__list">
              <li className="site-header__item">
                <button className="site-header__btn"></button>
              </li>
              <li className="site-header__item">
                <button className="site-header__btn site-header__btn--notification"></button>
              </li>
            </ul>
            <span className="site-header__user-info">Jones Ferdinand</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
