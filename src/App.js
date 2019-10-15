import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Avatar from './components/Avatar/Avatar';

class App extends React.Component {
  
  state = {
    isSidebarOpen: false
  }

  onClickAvatar() {
    console.log('click');
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen
    });
  }

  render() {

    let sidebarClasses = ['App__sidebar'];
    if (this.state.isSidebarOpen) {
      sidebarClasses.push('App__sidebar--open');
    }

    return <div className="App">
      
      <div className={sidebarClasses.join(' ')}>

        <div className="App__sidebar__header" onClick={() => this.onClickAvatar()}>
          <Avatar
            avatar="https://randomuser.me/api/portraits/men/78.jpg"
            name="Gerald Wolfe"
            nickname="@Wolfe"></Avatar>
        </div>

        <div className="App__sidebar__menu">
          <nav>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-user"></i>
                  <span className="hidden">Users</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-briefcase"></i>
                  <span className="hidden">Leads</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chart-line"></i>
                  <span className="hidden">Analytics</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-cog"></i>
                  <span className="hidden">Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="App__sidebar__footer">
          <a href="#">
            <i className="fa fa-sign-out-alt"></i>
            <span className="hidden">Log out</span>
          </a>
        </div>
      </div>

      <div className="App__content">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>




    </div>
  }
}

export default App;
