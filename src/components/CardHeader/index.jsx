import './styles.module.css';

function CardHeader({ name, userName, isMale, userPhoto }) {
  const inlineStyles = {
    color: '#fff',
    backgroundColor: isMale ? 'blue' : 'pink',
  };

  return (
    <div
      className="cardHeader"
      style={{ backgroundImage: `url(${userPhoto})` }}
    >
      <p className="name">{name}</p>
      <p className="userName">@{userName}</p>
      <button className="followBtn" style={inlineStyles}>
        +
      </button>
    </div>
  );
}

export default CardHeader;
