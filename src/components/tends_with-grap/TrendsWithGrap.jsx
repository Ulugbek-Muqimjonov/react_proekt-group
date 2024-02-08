import "./tendsGraph.css";

function TrendsWithGrap() {
  return (
    <div className="hero-trends__wrapper">
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
     <div>
     <ul className="trends-list">
       <li className="trends-item">Resolved<strong className="trends-big">449</strong></li>
       <li className="trends-item">Received<strong className="trends-big">426</strong></li>
       <li className="trends-item">Average first response time<strong className="trends-big">33m</strong></li>
       <li className="trends-item">Average response time<strong className="trends-big">3h 8m</strong></li>
       <li className="trends-item">Resolution within SLA<strong className="trends-big">94%</strong></li>
     </ul>
   </div>
   </div>
  );
}

export default TrendsWithGrap;
