import React from "react";
import { useParams } from "react-router-dom";
const Username = () => {
  const { username } = useParams();
  return <h1>User Profile Page for {username}</h1>;
};

export default Username;
