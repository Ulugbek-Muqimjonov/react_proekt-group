import "./card.css";
function Card({title, num }) {
  return (
    <li className="hero__cardItem">
      <span className="hero__card-text">{title}</span>
      <strong className="hero__card-number">{num}</strong>
    </li>
  );
}

export default Card;
