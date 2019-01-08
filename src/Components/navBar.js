import React, { Component } from 'react'
import '../Styles/navbar.css'

class NavBar extends Component {

  render(){
    return (
        <div className='nav-bar'>
          <section className='nav-image'>
              <div>
                <a href='#bio-text'><h6>Chalky</h6></a>
              </div>
            </section>
            <section className='home-nav'>
              <div>
                <a href='#title-page'><h6>Home</h6></a>
              </div>
            </section>
            <section className='releases-nav'>
              <div>
                <a href='#release-page-link'><h6>Releases</h6></a>
                </div>
            </section>
            <section className='bio-nav'>
              <div>
                <h6>Shop</h6>
              </div>
            </section>
            <section className='shop-nav'>
              <div>
                <h6>Contact</h6>
              </div>
            </section>
        </div>
    );
  }
};

export default NavBar;
