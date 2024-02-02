import Header from "../header/Header";
import CardList from "../cardList/CardList";
import "./body.css";
import Trends from "../tends/Trends";
function Body() {
  return (
    <div className="site-body">
      <Header />
      <main className="site-main">
        <section className="site-main__hero hero">
          <div className="container">
            <div className="hero__wrap">
              <CardList />
              <Trends />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Body;
