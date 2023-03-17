import './App.css';

import UserCard from './components/UserCard';
import users from './users.json';

function App() {
  return (
    <div className="App">
      <UserCard user={users.user1} />
      <UserCard user={users.user2} />
    </div>
  );
}

export default App;
