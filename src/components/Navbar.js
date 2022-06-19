import React from 'react';
import { Link } from 'react-router-dom';
import { UseAppContext } from '../context/AppContext';
import myLogo from '../images/mylogowhite.png';
import './Navbar.scss';

const Navbar = () => {
  const { activemenu } = UseAppContext();

  return (
    <header className="App-header">
        <div className="header-box-1">
            <img src={myLogo} alt="My Logo" />
        </div>

        {/* Main Menu */}
        <div className="header-box-2">
            <Link to="/jalombroweb">
                <button className={activemenu === '/jalombroweb' ? 'header-btn btn-selected' : 'header-btn'}>HOME</button>
            </Link>
            <Link to="/jalombroweb/aboutme">
                <button className={activemenu === '/jalombroweb/aboutme' ? 'header-btn btn-selected' : 'header-btn'}>ABOUT ME</button>
            </Link>
            <Link to="/jalombroweb/contact">
                <button className={activemenu === '/jalombroweb/contact' ? 'header-btn btn-selected' : 'header-btn'}>CONTACT</button>
            </Link>
        </div>
    </header>
  )
}

export default Navbar;
