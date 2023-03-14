import './CardHeader.css';

function CardHeader({ name, userName, isMale, userPhoto }) {
  return (
    <div
      className="cardHeader"
      style={{ backgroundImage: `url(${userPhoto})` }}
    >
      <p className="name">{name}</p>
      <p className="userName">@{userName}</p>
      <button className="followBtn">+</button>
    </div>
  );
}

export default CardHeader;
