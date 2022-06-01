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
              <Link to="/jkalombro/home">
                <button className={this.state.activemenu === '/jkalombro/home' ? 'header-btn btn-selected' : 'header-btn'}>HOME</button>
              </Link>
              <Link to="/jkalombro/skills">
                <button className={this.state.activemenu === '/jkalombro/skills' ? 'header-btn btn-selected' : 'header-btn'}>SKILLS</button>
              </Link>
              <Link to="/jkalombro/contact">
                <button className={this.state.activemenu === '/jkalombro/contact' ? 'header-btn btn-selected' : 'header-btn'}>CONTACT</button>
              </Link>
            </div>
          </header>
          <Switch>
            <Route exact path="/jkalombro/home" 
              render={(props) => <HomePage {...props} 
                handleChangeRoute={this.handleChangeRoute} 
                currentactivemenu={this.state.activemenu}/>} />
            <Route exact path="/jkalombro/skills" 
              render={(props) => <SkillPage {...props} 
                  handleChangeRoute={this.handleChangeRoute} 
                  currentactivemenu={this.state.activemenu}/>} />
            <Route exact path="/jkalombro/contact" 
              render={(props) => <ContactPage {...props} 
                handleChangeRoute={this.handleChangeRoute} 
                currentactivemenu={this.state.activemenu}/>} />
            <Redirect from="/" to="/jkalombro/home" />
            <Redirect from="/jkalombro" to="/jkalombro/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
