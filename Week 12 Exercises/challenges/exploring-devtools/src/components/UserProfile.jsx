import React from 'react';

function UserProfile({ name, age, email }) {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserProfile;
