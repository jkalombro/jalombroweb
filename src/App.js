import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import myLogo from './images/mylogowhite.png';

//COMPONENTS
import HomePage from './pages/Home';
import SkillPage from './pages/Skills';
import ContactPage from './pages/Contact';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activemenu: 'home'
    }
  }

  handleChangeRoute = (newactive) => {
    console.log(newactive);
    this.setState({activemenu: newactive});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="header-box-1">
              <img src={myLogo} alt="My Logo" />
            </div>

            {/* Main Menu */}
            <div className="header-box-2">
              <Link to="/jalombroweb/home">
                <button className={this.state.activemenu === '/jalombroweb/home' ? 'header-btn btn-selected' : 'header-btn'}>HOME</button>
              </Link>
              <Link to="/jalombroweb/skills">
                <button className={this.state.activemenu === '/jalombroweb/skills' ? 'header-btn btn-selected' : 'header-btn'}>SKILLS</button>
              </Link>
              <Link to="/jalombroweb/contact">
                <button className={this.state.activemenu === '/jalombroweb/contact' ? 'header-btn btn-selected' : 'header-btn'}>CONTACT</button>
              </Link>
            </div>
          </header>
          <Switch>
            <Route exact path="/jalombroweb/home" 
              render={(props) => <HomePage {...props} 
                handleChangeRoute={this.handleChangeRoute} 
                currentactivemenu={this.state.activemenu}/>} />
            <Route exact path="/jalombroweb/skills" 
              render={(props) => <SkillPage {...props} 
                  handleChangeRoute={this.handleChangeRoute} 
                  currentactivemenu={this.state.activemenu}/>} />
            <Route exact path="/jalombroweb/contact" 
              render={(props) => <ContactPage {...props} 
                handleChangeRoute={this.handleChangeRoute} 
                currentactivemenu={this.state.activemenu}/>} />
            <Redirect from="/" to="/jalombroweb/home" />
            <Redirect from="/jalombroweb" to="/jalombroweb/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
