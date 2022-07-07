import React from "react";
import { Link } from "react-router-dom";
import { UseAppContext } from "../../context/AppContext";
import myLogo from "../../images/mylogowhite.png";
import "./Navbar.scss";

const Navbar = () => {
    const { activemenu } = UseAppContext();

    return (
        <header className="App-header" data-testid="navbar">
            <div className="header-box-1">
                <img src={myLogo} alt="My Logo" />
            </div>

            {/* Main Menu */}
            <div className="header-box-2">
                <Link to="/">
                    <button className={activemenu === "/" ? "header-btn btn-selected" : "header-btn"}>HOME</button>
                </Link>
                <Link to="/aboutme">
                    <button className={activemenu === "/aboutme" ? "header-btn btn-selected" : "header-btn"}>ABOUT ME</button>
                </Link>
                <Link to="/contact">
                    <button className={activemenu === "/contact" ? "header-btn btn-selected" : "header-btn"}>CONTACT</button>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
