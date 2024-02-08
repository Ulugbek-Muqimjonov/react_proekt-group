import TrendsWithGrap from "../tends_with-grap/TrendsWithGrap";
import "./trends.css";
import Tickets from "../tickets/tickets";
function Trends() {
  return (
    <div>
    <div className="hero__trneds-wrap">
      <TrendsWithGrap />
    </div>
    <div >
      <Tickets/>
      </div>
  </div>
    
  );
}

export default Trends;
