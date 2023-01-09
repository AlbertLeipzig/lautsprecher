import { useState } from 'react';

const testUser = {
  name: 'John',
  age: 30,
};
export const Test = () => {
  return (
    <div className="test">
      <h1>Test</h1>
      {/* {testUser.name && <p>{testUser.name}</p>} */}
      <p>{testUser?.lastName}</p>
      {testUser.age && <p>{testUser.age}</p>}
    </div>
  );
};
