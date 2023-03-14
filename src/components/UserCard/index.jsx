import './styles.module.css';

import CardHeader from '../CardHeader';
import CardBottom from '../CardBottom';

// const users = [
//   {
//     name: 'Khomenko Kyrylo',
//     userName: 'kiz0r',
//     isMale: true,
//     tweets: 123,
//     followings: 456,
//     followers: 789,
//   },
//   {
//     name: 'Fesenko Valeriia',
//     userName: 'vaferiiaa',
//     isMale: false,
//     tweets: 101,
//     followings: 98,
//     followers: 687,
//   },
// ];

function UserCard({ props }) {
  const { name, userName, isMale, tweets, followings, followers, userPhoto } =
    props;

  return (
    <article className="userCard">
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
