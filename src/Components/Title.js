import React, { Component } from 'react'
import '../Styles/Title.css'
import { pictureArray } from './pictureArray.js'

class Title extends Component {

  constructor(props) {
    super(props)
      this.state = {
        pictureCounter: 0,
        timer: null
      }
    }

  handleChange = () => {
    if(this.state.pictureCounter < pictureArray.length -1) {
      this.setState({
        pictureCounter: this.state.pictureCounter + 1
      })
     }else {
     this.setState({
       pictureCounter: 0
     })
   }
  }

  componentDidMount () {
    this.setState({
      timer: setInterval(() => this.handleChange(), 400)
    })
  }

  render(){
    return (
        <div id='title-page' className='title-page' onPointerEnter={ () => {this.props.handleNavBarShow(); this.props.handleNavSideBarChange()}}>
        <div id='mobile-banner'>Chalky</div>
        <div id='animation-home'>
          <img className='title-image' src={pictureArray[this.state.pictureCounter]}></img>
        </div>
        </div>
      );
    }

}

export default Title ;
