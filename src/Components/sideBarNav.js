import React, {Component} from 'react'
import '../Styles/sideBarNav.css'

class SideBarNav extends Component {

  render(){

    const fontSize = {
      fontSize: '20px',
    }

  return (
    <div>
      <div className="sideBarNav">
        <ul>
          <a href="#title-page"><li>Home</li></a>
          {
            this.props.sideBar.releasePage
            ? <a href="#release-page-link"><li style={fontSize}>Releases</li></a>
            : <a href="#release-page-link"><li>Releases</li></a>
          }
          {
            this.props.sideBar.bio
             ? <a href="#bio-section"><li style={fontSize}>Chalky</li></a>
             : <a href="#bio-section"><li>Chalky</li></a>
          }
          {
            this.props.sideBar.contact
            ? <a href="#contact-info"><li style={fontSize}>Contact</li></a>
            : <a href="#contact-info"><li>Contact</li></a>
          }
        </ul>
      </div>
    </div>
    );
  }

};

export default SideBarNav;
