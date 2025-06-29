import { useState } from 'react';
const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user">
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>Count :{count}</h3>
      <h3>Count :{count2}</h3>
    </div>
  );
};
export default User;
