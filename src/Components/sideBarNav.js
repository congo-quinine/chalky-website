import React, {Component} from 'react'
import '../Styles/sideBarNav.css'

const SideBarNav = () => {

  return (
    <div>
      <div className="sideBarNav">
        <ul>
        <a href="#title-page">
          <li>
          Home
          </li>
          </a>
          <a href="#release-page-link">
          <li>
          Releases
          </li>
          </a>
          <a href="#bio-text">
          <li>
          Chalky
          </li>
          </a>
          <a href="" >
          <li>
          Merch
          </li>
          </a>
          <a href="">
          <li>
          Contact
          </li>
          </a>
          </ul>
      </div>
    </div>
    );
}

export default SideBarNav;
