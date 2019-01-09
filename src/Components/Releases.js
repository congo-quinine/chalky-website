import React, { Component } from 'react'
import NavBar from './navBar.js'
import '../Styles/releasePage.css'

class Releases extends Component {

    render(){
      return (
          <div className='release-page-wrappper'>
            <div className='release-page-title'>
              <h1 id='release-page-link'>-Freshest Beats-</h1>
            </div>
            <div className='albums'>
              <div>
                <h2>-Second Beach-</h2>
                  <iframe width="100%" height="300" scrolling="no" frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/546344397&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                  </iframe>
                <h5 className='date-line'>-Released December 10, 2018</h5>
                  <p>
                  Chalky &amp; Seppa have created something truly unique with “Bright Spots” — combining chunky rhythms of hip-hop with raw instrumentalism and involving hooks, the duo takes you on a journey through their combined influences, pulling the past into the future. To top this off, we’re excited to be presenting Chalky’s music to the world. Make sure you keep tabs on him in time to come, as his musical output is nothing short of astonishing!
                  </p>
              </div>
                <div>
                  <h2>-Polychrome-</h2>
                  <iframe width="100%" height="300" scrolling="no" frameborder="no"
                   allow="autoplay"
                   src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/530823246&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                  </iframe>
                  <h5 className='date-line'>-Released December 7, 2018 </h5>
                    <p>
                      Chalky &amp; Seppa have created something truly unique with “Bright Spots” — combining chunky rhythms of hip-hop with raw instrumentalism and involving hooks, the duo takes you on a journey through their combined influences, pulling the past into the future. To top this off, we’re excited to be presenting Chalky’s music to the world. Make sure you keep tabs on him in time to come, as his musical output is nothing short of astonishing!
                    </p>
                </div>
                <div>
                  <h2>-Bright Spots-</h2>
                  <div>
                    <iframe scrolling="no" frameborder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/492073833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                      </iframe>
                  </div>
                  <h5 className='date-line'>-Released September 3, 2018 </h5>
                  <p>
                    Chalky &amp; Seppa have created something truly unique with “Bright Spots” — combining chunky rhythms of hip-hop with raw instrumentalism and involving hooks, the duo takes you on a journey through their combined influences, pulling the past into the future. To top this off, we’re excited to be presenting Chalky’s music to the world. Make sure you keep tabs on him in time to come, as his musical output is nothing short of astonishing!
                  </p>
                </div>

                <div>
                  <h2>-Torn Together-</h2>
                  <iframe width="100%" height="300" scrolling="no" frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/324172790&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                   <h5 className='date-line'>-Released January 5, 2018</h5>
                    <p>
                      Chalky &amp; Seppa have created something truly unique with “Bright Spots” — combining chunky rhythms of hip-hop with raw instrumentalism and involving hooks, the duo takes you on a journey through their combined influences, pulling the past into the future. To top this off, we’re excited to be presenting Chalky’s music to the world. Make sure you keep tabs on him in time to come, as his musical output is nothing short of astonishing!
                    </p>
                </div>
            </div>
        </div>
      )
    }

}

export default Releases;
