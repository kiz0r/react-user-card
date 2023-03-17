import './UserCard.css';
import CardHeader from '../CardHeader';
import CardBottom from '../CardBottom';

function UserCard({ user }) {
  const { name, userName, isMale, tweets, followings, followers, userPhoto } =
    user;

  const shadowColor = isMale ? '#00CDFF' : '#9E00FF';

  const inlineCardStyle = {
    boxShadow: `-5px 20px 40px -20px ${shadowColor}`,
  };

  return (
    <article className="userCard" style={inlineCardStyle}>
      <CardHeader
        name={name}
        userName={userName}
        isMale={isMale}
        userPhoto={userPhoto}
      />
      <CardBottom
        tweets={tweets}
        followings={followings}
        followers={followers}
      />
    </article>
  );
}

export default UserCard;
