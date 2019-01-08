import React, { Component } from 'react';
import NavBar from './navBar.js'
import Releases from './Releases.js'
import Title from './Title.js'
import SideBar from './sideBar.js'
import Bio from './bio.js'
import '../Styles/App.css';


class App extends Component {

  constructor(props) {
    super(props)
      this.state = {
        isClickedReleases: false
      }
    }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Title />
        <Releases />
        <SideBar />
        <Bio />
      </div>
    );
  }

}

export default App;
