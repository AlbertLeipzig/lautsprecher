import { useState, useEffect } from 'react';
const userList = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 24 },
  { name: 'Jack', age: 30 },
];
/* const excludedUsers = [20];

const includedUsers = userList.filter((user) => {
  if (excludedUsers.includes(user.age)) {
    return false;
  }
  return true;
}); */

export const Test = () => {
  const [users, setUsers] = useState(userList);
  const [filter, setFilter] = useState('');
  const [title, setTitle] = useState('Test');

  useEffect((age) => {
    const filteredUsers = [];
    userList.forEach((user) => {
      if (user.age !== age) {
        filteredUsers.push(user);
      }
    });
    console.log(filteredUsers);
    setUsers(filteredUsers);
  }, [filter]);

  return (
    <div className="test">
      <h1>{title}</h1>
      <label htmlFor="user">
        <input
          type="text"
          placeholder="user..."
                onChange={(e) => {
            setFilter(e.target.value);
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
