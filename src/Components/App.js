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
        bio: false,
        contact: false
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

    handleNavSideBarChange = (position) => {
      switch(position){
        case 'release':
          this.setState({
            releasePage: true,
            bio: false,
            contact: false
          })
          break;
        case 'bio':
          this.setState({
            releasePage: false,
            bio: true,
            contact: false
          })
          break;
        case 'contact':
          this.setState({
            releasePage: false,
            bio: false,
            contact: true
          })
          break;
        }
    }

  render() {
    return (
      <div className="App">
        {
          this.state.leftHomePage
          ? <SideBarNav sideBar={this.state}/>
          : <NavBar />
        }
        <SideBar />
        <Title handleNavBarShow={this.handleNavBarShow} handleNavSideBarChange={this.handleNavSideBarChange}  />
        <Releases handleNavBarHide={this.handleNavBarHide} handleNavSideBarChange={this.handleNavSideBarChange} />
        <Bio handleNavBarHide={this.handleNavBarHide} handleNavSideBarChange={this.handleNavSideBarChange} />
        <Contact handleNavSideBarChange={this.handleNavSideBarChange} />
      </div>
    );
  }

}

export default App;
