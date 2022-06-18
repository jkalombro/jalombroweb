import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import myLogo from './images/mylogowhite.png';

//COMPONENTS
import HomePage from './pages/Home/Home';
import SkillPage from './pages/Skills/Skills';
import ContactPage from './pages/Contact/Contact';

const App = () => {
  const [ activemenu, setActivemenu ] = useState("/jalombroweb/home");
  
  const handleChangeRoute = (newactive) => {
    setActivemenu(newactive);
  }

  return (
    <Router>
      <main className="App">
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

        <Switch>
          <Route exact path="/jalombroweb/home" 
            render={(props) => <HomePage {...props} 
              handleChangeRoute={() => handleChangeRoute()} 
              currentactivemenu={activemenu}/>} />
          <Route exact path="/jalombroweb/skills" 
            render={(props) => <SkillPage {...props} 
                handleChangeRoute={() => handleChangeRoute()} 
                currentactivemenu={activemenu}/>} />
          <Route exact path="/jalombroweb/contact" 
            render={(props) => <ContactPage {...props} 
              handleChangeRoute={() => handleChangeRoute()} 
              currentactivemenu={activemenu}/>} />
          <Redirect from="/" to="/jalombroweb/home" />
          <Redirect from="/jalombroweb" to="/jalombroweb/home" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
