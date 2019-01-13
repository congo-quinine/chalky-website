import React, {Component} from 'react'
import '../Styles/sideBarNav.css'

const colorStyle = {
  color: 'red',
}

class SideBarNav extends Component {

  constructor(props) {
    super(props)
    }


  render(){
  return (
    <div>
      <div className="sideBarNav">
        <ul>
          <a href="#title-page"><li>Home</li></a>
           <a href="#release-page-link"><li>Releases</li></a>
            <a href="#bio-section"><li>Chalky</li></a>
          <a href="#contact-info"><li>Contact</li></a>
        </ul>
      </div>
    </div>
    );
  }

};

export default SideBarNav;
