import React from "react";
import { Link } from "react-router-dom";

const Gnb = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button>Login</button>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
