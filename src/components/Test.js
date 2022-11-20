import { useState, useEffect } from 'react';
const userList = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 24 },
  { name: 'Jack', age: 30 },
];

export const Test = () => {
  const [users, setUsers] = useState(userList);
  const [filter, setFilter] = useState('');
  const [title, setTitle] = useState('Test');

  useEffect(() => {
    const filteredUsers = [];
    userList.forEach((user) => {
      if (user.age === filter) {
        filteredUsers.push(user);
      }
    });
    setUsers(filteredUsers);
    console.log('filtered users ', filteredUsers);
    console.log('typeof filteredUsers: ', typeof filteredUsers);
  }, [filter]);

  const updateFilter = (filterValue) => {
    const formatFilter = parseInt(filterValue);
    console.log('typeof formatFilter: ', typeof formatFilter);
    setFilter(formatFilter);
  };

  return (
    <div className="test">
      <h1>{title}</h1>
      <h2>{filter}</h2>
      <label htmlFor="user">
        <input
          type="text"
          placeholder="user..."
          onChange={(e) => {
            updateFilter(e.target.value);
          }}
        />
      </label>

      {users &&
        users.map((user, id) => (
          <div className="user" key={id}>
            <h2>{user.name}</h2>
            <h3>{user.age}</h3>
          </div>
        ))}
    </div>
  );
};
