import './CardBottom.css';

const CardBottom = ({ tweets, followings, followers }) => {
  return (
    <section className="cardBottom">
      <div className="infoBlock">
        <p className="blockTitle">Tweets</p>
        <p className="blockContent">{tweets}</p>
      </div>
      <div className="infoBlock">
        <p className="blockTitle">Followings</p>
        <p className="blockContent">{followings}</p>
      </div>
      <div className="infoBlock">
        <p className="blockTitle">Followers</p>
        <p className="blockContent">{followers}</p>
      </div>
    </section>
  );
};

export default CardBottom;
