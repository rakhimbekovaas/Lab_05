
// Task_1
import type { User } from './types';
import { useState } from 'react';
import UserCard from './UserCard';

const INITIAL_DATA: USER[] = [
    {name: "Alice", email: "alice@mail.com", age: 25},
    {name: "Bob", email: "bob@mail.com", age: 30},
];

const SearchApp = () => {
const [users] = useState<User[]>(INITIAL_DATA);
const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
const [searchTerm, setSearchTerm] = useState("")


// Task_2

const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredUsers(
        users.filter((u) => 
        u.name.toLowerCase().includes(
            term.toLocaleLowerCase()
            )
        )
    );
};

const handleClear = (
    event: React.MouseEvent<HTMLButtonElement>
) => {
    setSearchTerm("");
    setFilteredUsers(users);
}

// task_3

return (
    <div>
        <input value={searchTerm} onChange={handleSearch} placeholder="Search by name..." />
        <button onClick={handleClear}>Clear</button>
        {filteredUsers.length == 0 ? (
            <p>No result found</p>
        ) : (
            filteredUsers.map((u) => (
                <UserCard key={u.email} user={u}>
                    <p>{u.email}</p>
                </UserCard>
        )))}
    </div>
);
};

export default SearchApp;