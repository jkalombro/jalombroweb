import React, { useCallback, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { UseAppContext } from '../context/AppContext';
import myLogo from '../images/mylogowhite.png';

const Navbar = () => {
  const { activemenu } = UseAppContext();

  return (
    <header className="App-header">
        <div className="header-box-1">
            <img src={myLogo} alt="My Logo" />
        </div>

        {/* Main Menu */}
        <div className="header-box-2">
            <Link to="/jalombroweb/home">
                <button className={activemenu === '/jalombroweb/home' ? 'header-btn btn-selected' : 'header-btn'}>HOME</button>
            </Link>
            <Link to="/jalombroweb/skills">
                <button className={activemenu === '/jalombroweb/skills' ? 'header-btn btn-selected' : 'header-btn'}>SKILLS</button>
            </Link>
            <Link to="/jalombroweb/contact">
                <button className={activemenu === '/jalombroweb/contact' ? 'header-btn btn-selected' : 'header-btn'}>CONTACT</button>
            </Link>
        </div>
    </header>
  )
}

export const NavbarRouteWrapper = () => 
{
    const { activemenu, setActivemenu } = UseAppContext();
    const location = useLocation();

    const evaluateActiveMenu = useCallback(() => {
        if(activemenu !== location.pathname) {
            setActivemenu(location.pathname);
        }
    }, [activemenu, location, setActivemenu]);

    useEffect(() => {
        evaluateActiveMenu();
    }, [activemenu, evaluateActiveMenu]);

    return (
        <Outlet />
    );
}

export default Navbar;
