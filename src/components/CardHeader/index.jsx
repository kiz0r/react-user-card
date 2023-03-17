import './CardHeader.css';

function CardHeader({ name, userName, userPhoto }) {
  return (
    <section
      className="cardHeader"
      style={{ backgroundImage: `url(${userPhoto})` }}
    >
      <p className="name">{name}</p>
      <p className="userName">@{userName}</p>
      <button className="followBtn">+</button>
    </section>
  );
}

export default CardHeader;
