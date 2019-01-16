import React, {Component} from 'react'
import '../Styles/contact.css'

class Contact extends Component {

  render(){
    const contact = 'contact'
    return(
      <div className='contact-page-wrapper' onPointerEnter={ () => this.props.handleNavSideBarChange(contact)}>
        <div id='contact-info'>
          <h1>Contact Deets</h1>
            <p> Chalky Email: chalky@chalky.com </p>
            <p> Chalky Facebook: <a href="https://www.facebook.com/chalkywhitemusic" target='_blank'>
            <img className='image-sidebar' src='http://www.stickpng.com/assets/images/58e91965eb97430e819064f5.png'></img></a></p>
            <p> Chalky SoundClound: <a href="#" target='_blank'>
            <iframe className='image-sidebar' allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fchalkywhitemusic&color=orange_white&size=32">
            </iframe></a></p>
        </div>
      </div>
    );
  };
};

export default Contact;
