import React, { Component } from 'react'
import '../Styles/sidebar.css'

const SideBar = () => {

  return (
      <div className="sidenav">
        <a href="#" target='_blank'>
          <iframe className='image-sidebar' allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fchalkywhitemusic&color=orange_white&size=32">
          </iframe>
        </a>
        <a href="https://www.instagram.com/chalkyartist/" target='_blank'>
          <img className='image-sidebar' src='https://cdn2.iconfinder.com/data/icons/on-point-social-media/141/Instagram-512.png'></img>
        </a>
        <a href="https://www.facebook.com/chalkywhitemusic" target='_blank'>
          <img className='image-sidebar' src='http://www.stickpng.com/assets/images/58e91965eb97430e819064f5.png'></img>
        </a>
        <a href="https://twitter.com/chalkymusic" target='_blank'>
          <img className='image-sidebar'src='https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png'></img>
        </a>
        <a href="https://chalkywhiteartist.bandcamp.com/releases" target='_blank'>
          <img className='image-sidebar'src='  https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bandcamp-button-bc-circle-black.svg/2000px-Bandcamp-button-bc-circle-black.svg.png'></img>
        </a>
      </div>
  );

};

export default SideBar;
