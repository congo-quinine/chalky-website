import React, { Component } from 'react'
import '../Styles/Title.css'

const pictureArray = ['.../IMG_4607.JPG', '../IMG_4608.JPG', '../IMG_4609.JPG','../IMG_4610.JPG','../IMG_4611.JPG','../IMG_4612.JPG', '../IMG_4613.JPG', '../IMG_4614.JPG','../IMG_4615.JPG','../IMG_4616.JPG','../IMG_4617.JPG','../IMG_4618.JPG','../IMG_4619.JPG','../IMG_4622.JPG','../IMG_4623.JPG','../IMG_4624.JPG','../IMG_4625.JPG','../IMG_4626.JPG','../IMG_4627.JPG','../IMG_4628.JPG','../IMG_4629.JPG','../IMG_4630.JPG','../IMG_4631.JPG','../IMG_4632.JPG','../IMG_4633.JPG','../IMG_4634.JPG','../IMG_4635.JPG','../IMG_4636.JPG','../IMG_4637.JPG','../IMG_4638.JPG','../IMG_4638.JPG','../IMG_4640.JPG','../IMG_4641.JPG','../IMG_4643.JPG','../IMG_4644.JPG','../IMG_4645.JPG','../IMG_4648.JPG','../IMG_4649.JPG','../IMG_4650.JPG','../IMG_4651.JPG','../IMG_4652.JPG','../IMG_4653.JPG','../IMG_4654.JPG','../IMG_4654.JPG','../IMG_4654.JPG']

let counter = 0;

class Title extends Component {

  constructor(props) {
    super(props)
      this.state = {
        counter: 0
      }
    }


  handelChange = () => {
    this.setState({counter})
    if(this.state.counter >= pictureArray.length-1) {
       counter = 0
     }
     counter++
  }


  componentDidMount () {
    let timerId = setInterval(() => this.handelChange(), 500);
  }

  render(){
    return (
        <div id='title-page' className='title-page'>
          <img className='title-image' src={pictureArray[counter]}/>
        </div>
      );
    }

}

export default Title ;
