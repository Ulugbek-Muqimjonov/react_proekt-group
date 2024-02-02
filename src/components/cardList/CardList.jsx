import "./cardlist.css";
import Card from "../card/Card";
import { cards } from "../../constants";
function CardList() {
  return (
    <ul className="hero__cardList">
      {cards.map((item) => (
        <Card key={item.id} title={item.text} num={item.number} />
      ))}
    </ul>
  );
}

export default CardList;
