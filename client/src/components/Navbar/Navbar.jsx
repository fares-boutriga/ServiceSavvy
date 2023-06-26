import React from 'react';
import './Navbar.css';

function Navbar({ changeView }) {
  return (
    <div>
      <div id="n">
        <img
          id="img"
          src="https://res.cloudinary.com/dt7t7wjql/image/upload/v1687745426/zfuz375ewcrdovp1l6ac.png"
          alt="fdsfsdf"
        />

        <div className="nav">
          <p onClick={() => changeView('home')}>Home</p>
          <p onClick={() => changeView('login')}>Login as worker</p>
          <p onClick={() => changeView('signup')}>signup as worker</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;