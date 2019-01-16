import React, { Component } from 'react'
import '../Styles/Title.css'
import { pictureArray } from './pictureArray.js'

class Title extends Component {

  constructor(props) {
    super(props)
      this.state = {
        pictureCounter: 0
      }
    }

  handleChange = () => {
    if(this.state.pictureCounter === pictureArray.length) {
       this.setState({
         pictureCounter: 0
       })
     }else {
     this.setState({
       pictureCounter: this.state.pictureCounter + 1
     })
   }
  }

  componentDidMount () {
    setInterval(() => this.handleChange(), 400);
  }

  render(){
    return (
        <div id='title-page' className='title-page' onPointerEnter={ () => {this.props.handleNavBarShow(); this.props.handleNavSideBarChange()}}>
        <div id='mobile-banner'>Chalky</div>
          <img className='title-image' src={pictureArray[this.state.pictureCounter]}/>
        </div>
      );
    }

}

export default Title ;
