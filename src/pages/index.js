import React from 'react'
import Link from 'gatsby-link'
import { Fade, Zoom, Flip } from 'react-reveal'
import hh from './historical_homecrafters.png'
import continue_image from './continue_wip.png'

const IndexPage = () => (
  <div style={{marginTop: '2rem'}}>
    <Fade duration={1600} delay={1200}>
      <h1 style={{width: '16rem', fontSize: '2rem'}}>Hi, I’m Jonathan Fisher, a web developer that loves the creative process.</h1>
    </Fade>
    <Fade left duration={1200}>
      <div className="case-study-container">
        <img src={continue_image} className="case-study-thumb" />
      </div>
    </Fade>
    <Fade left duration={1200}>
      <Link to="/historical_homecrafters/">
        <div className="case-study-container">
          <img src={hh} className="case-study-thumb" />
        </div>
      </Link>
    </Fade>
  </div>
)

export default IndexPage
