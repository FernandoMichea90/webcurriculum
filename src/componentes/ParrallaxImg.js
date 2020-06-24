import React from 'react'
import {Parallax} from 'react-materialize'
function ParallaxImg() {

    return(
        <div>
  <Parallax
    image={<img alt="" src="https://placeimg.com/500/600/tech"/>}
    options={{
      responsiveThreshold: 0
    }}
  />
  <div className="section white">
    <div className="row container">
      <h2 className="header">
        Parallax
      </h2>
      <p className="grey-text text-darken-3 lighten-3">
        Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
      </p>
    </div>
  </div>
 
</div>

    )
    
}

export default ParallaxImg