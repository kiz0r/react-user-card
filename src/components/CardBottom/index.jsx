import './styles.module.css';

const CardBottom = ({ tweets, followings, followers }) => {
  return (
    <div className="cardBottom">
      <div className="userTweets">
        <p className="blockName">Tweets</p>
        <p className="blockContent">{tweets}</p>
      </div>
      <div className="userFollowings">
        <p className="blockName">Followings</p>
        <p className="blockContent">{followings}</p>
      </div>
      <div className="userFollowers">
        <p className="blockName">Followers</p>
        <p className="blockContent">{followers}</p>
      </div>
    </div>
  );
};

export default CardBottom;
