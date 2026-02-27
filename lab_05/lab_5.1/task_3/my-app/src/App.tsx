import type { User } from './types';
import UserCard from './UserCard';
import SkillList from './SkillList';

const user: User = {
  name: 'Sagynysh',
  email: 'asyma0902@gmail.com',
  age: 29,
};

const skills: Skill[] = [
  { id: 1, name: 'Sagynysh', level: 'Expert' },
  { id: 2, name: 'Amina', level: 'Intermediate' },
  { id: 3, name: 'Karlygash', level: 'Beginner' },
];

function App() {

  return (
    <>
      <div>
        <UserCard user = {user} isActive={true}>
          <p>Bio: Student studing DS full-time at university</p>
        </UserCard>

        <SkillList skills = {skills} />
      </div>
    </>
  )
}

export default App
