import type { User } from './types';
import UserCard from './UserCard';

const user: User = {
  name: 'Sagynysh',
  email: 'asyma0902@gmail.com',
  age: 29,
};

function App() {

  return (
    <>
      <div>
        <UserCard user = {user} isActive={true}>
          <p>Bio: Student studing DS full-time at university</p>
        </UserCard>
      </div>
    </>
  )
}

export default App
