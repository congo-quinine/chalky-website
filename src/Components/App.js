import React, { Component } from 'react';
import NavBar from './navBar.js'
import Releases from './Releases.js'
import Title from './Title.js'
import SideBar from './sideBar.js'
import Bio from './bio.js'
import SideBarNav from './sideBarNav.js'
import '../Styles/App.css';


class App extends Component {

  constructor(props) {
    super(props)
      this.state = {
        leftHomePage: false
      }
    }
    handleNavBarHide = () => {
      this.setState({
        leftHomePage: true
      })
    }
    handleNavBarShow = () => {
      this.setState({
        leftHomePage: false
      })
    }
  render() {
    return (
      <div className="App">
        {
          this.state.leftHomePage
          ? <SideBarNav />
          : <NavBar />
        }
        <Title handleNavBarShow={this.handleNavBarShow}/>
        <Releases handleNavBarHide={this.handleNavBarHide}/>
        <SideBar />
        <Bio handleNavBarHide={this.handleNavBarHide}/>
      </div>
    );
  }

}

export default App;
