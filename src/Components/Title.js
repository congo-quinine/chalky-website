import React, { Component } from 'react'
import '../Styles/Title.css'

const pictureArray = ['.../img_4607.jpg', '../img_4608.jpg', '../img_4609.jpg','../img_4610.jpg','../img_4611.jpg','../img_4612.jpg', '../img_4613.jpg', '../img_4614.jpg','../img_4615.jpg','../img_4616.jpg','../img_4617.jpg','../img_4618.jpg','../img_4619.jpg','../img_4622.jpg','../img_4623.jpg','../img_4624.jpg','../img_4625.jpg','../img_4626.jpg','../img_4627.jpg','../img_4628.jpg','../img_4629.jpg','../img_4630.jpg','../img_4631.jpg','../img_4632.jpg','../img_4633.jpg','../img_4634.jpg','../img_4635.jpg','../img_4636.jpg','../img_4637.jpg','../img_4638.jpg','../img_4639.jpg','../img_4640.jpg','../img_4641.jpg','../img_4643.jpg','../img_4644.jpg','../img_4645.jpg','../img_4648.jpg','../img_4649.jpg' ,'../img_4650.jpg' ,'../img_4651.jpg' ,'../img_4652.jpg','../img_4653.jpg' ,'../img_4654.jpg' ,'../img_4655.jpg' ,'../img_4656.jpg' ,'../img_4657.jpg' ,'../img_4658.jpg' ,'../img_4659.jpg' ,'../img_4660.jpg' ,'../img_4661.jpg' ,'../img_4662.jpg' ,'../img_4663.jpg','../img_4664.jpg','../img_4665.jpg','../img_4666.jpg','../img_4667.jpg','../img_4668.jpg','../img_4669.jpg','../img_4670.jpg','../img_46671.jpg','../img_4679.jpg','../img_4680.jpg','../img_4681.jpg' ]

let pictureCounter = 0;

class Title extends Component {

  constructor(props) {
    super(props)
      this.state = {
        pictureCounter: 0
      }
    }


  handelChange = () => {
    this.setState({pictureCounter})
    if(this.state.pictureCounter >= pictureArray.length-1) {
       pictureCounter = 0
     }
     pictureCounter++
  }


  componentDidMount () {
    let timerId = setInterval(() => this.handelChange(), 500);
  }

  render(){
    return (
        <div id='title-page' className='title-page'>
          <img className='title-image' src={pictureArray[pictureCounter]}/>
        </div>
      );
    }

}

export default Title ;
