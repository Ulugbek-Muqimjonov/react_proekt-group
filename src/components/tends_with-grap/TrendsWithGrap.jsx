import "./tendsGraph.css";

function TrendsWithGrap() {
  return (
    <div className="hero__tends-inner1">
      <h2 className="hero__trends-inner1-title">Today’s trends</h2>
      <div className="hero__trends-inner1-wrap">
        <p className="hero__trends-date">as of 25 May 2019, 09:41 PM</p>
        <ul className="hero__tends-dayList">
          <li className="hero__trends__dayItem">Today</li>
          <li className="hero__trends__dayItem">Yesterday</li>
        </ul>
      </div>
      <img
        className="hero__trends-img"
        src="./src/assets/img.png"
        alt="trends image"
      />
    </div>
  );
}

export default TrendsWithGrap;
