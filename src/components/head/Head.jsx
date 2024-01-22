import React from 'react';
import {Link} from 'react-router-dom';

const Head = () => {
  return (
    <div>
        <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/management">Management</Link>
        </li>
      </ul>
    </nav>

    </div>
  )
}

export default Head;