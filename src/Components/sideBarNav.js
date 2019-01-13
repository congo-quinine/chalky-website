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
          <a href="#title-page">
          <li>Home</li>
          </a>
          {
            this.props.handleSideBarColorChange.releasePage
           ? <a href="#release-page-link"><li style={ colorStyle }>Releases</li></a>
           : <a href="#release-page-link"><li>Releases</li></a>
          }
          {
            this.props.handleSideBarColorChange.bioPage
            ? <a href="#bio-text"><li style={ colorStyle }>Chalky</li></a>
            : <a href="#bio-text"><li>Chalky</li></a>
          }
          <a href="" >
          <li>Merch</li>
          </a>
          <a href="">
          <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
    );
  }

};

export default SideBarNav;
