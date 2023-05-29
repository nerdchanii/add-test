import React from 'react';

const Username = () => {
  const { username } = useParams();
  return <h1>User Profile Page for {username}</h1> 
}

export default Username;

