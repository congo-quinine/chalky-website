import React, { Component } from 'react'
import '../Styles/bio.css'

class Bio extends Component {

    render(){
      return (
        <div>
        <div className='bio-picture-title'>
          <h4>Chalky White (UK)</h4>
            <img id='bio-picture' src='../Chalky.jpg'></img>
          </div>  
            <div id='bio-text'>
              <p>
              Chalky White is a truly unique beat maker, guitarist and composer hailing from the South West of the UK. Having played in a broad spectrum of ensembles from a young age from Punk to Jazz, Hip-Hop to Post-Rock, he pulls all of these influences together to create music that stands up as fresh and innovative in an otherwise oversaturated musical landscape.
              </p>
              <p>
              After working extensively on Asa’s debut album ‘Torn Together’ (released Jan 2018), he rapidly moved on to other projects releasing a collaborative album with fellow beat maker Seppa entitled ‘Bright Spots’ (released September 2018) and also featuring on Koan Sound’s ‘Polychrome’ (released December 2018).
              </p>
              <p>
              He also plays guitar as part of the Phantom Ensemble headed by UK Hip-Hop producer Simiah, fusing MPC beats and live jazz instrumentalism. His debut solo album ’Second Beach’ (released December 2018) truly shows off Chalky’s talents, an exploration of his roots on the Cornish coast. The album unfolds as a journey of lush layers and moving textures that paints a rich picture of his home town, infused with something far more ethereal.
              </p>
            </div>
            <img id='bio-background' src='../IMG_4606.JPG'></img>
        </div>
      );
    }
};

export default Bio;
