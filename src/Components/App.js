import React, { Component } from 'react';
import NavBar from './navBar.js'
import Releases from './Releases.js'
import Title from './Title.js'
import SideBar from './sideBar.js'
import Bio from './bio.js'
import SideBarNav from './sideBarNav.js'
import Contact from './contact.js'
import '../Styles/App.css';


class App extends Component {

  constructor(props) {
    super(props)
      this.state = {
        leftHomePage: false,
        releasePage: false,
        bioPage: false
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

    handleSideBarColorChange = (event) => {

    }


  render() {
    return (
      <div className="App">
        {
          this.state.leftHomePage
          ? <SideBarNav handleSideBarColorChange={this.state} />
          : <NavBar />
        }
        <Title handleNavBarShow={this.handleNavBarShow} handleSideBarColorChange={this.handleSideBarColorChange}/>
        <Releases handleNavBarHide={this.handleNavBarHide} handleSideBarColorChange={this.handleSideBarColorChange} />
        <SideBar />
        <Bio handleNavBarHide={this.handleNavBarHide} handleSideBarColorChange={this.handleSideBarColorChange} />
        <Contact />
      </div>
    );
  }

}

export default App;
