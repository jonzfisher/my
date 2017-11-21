import React from 'react'
import Link from 'gatsby-link'
import { Fade, Zoom, Flip } from 'react-reveal'
import historical_homecrafters from './historical_homecrafters.png'
import continue_wip from './continue_wip.png'

const IndexPage = () => (
  <div style={{marginTop: '2rem'}}>
    <Fade duration={1600} delay={1200}>
      <h1 style={{width: '16rem', fontSize: '2rem'}}>Hi, I’m Jonathan Fisher, a web developer that loves the creative process.</h1>
    </Fade>
    <Fade duration={600}>
      <div className="case-study-container">
        <img src={continue_wip} className="case-study-thumb" />
      </div>
    </Fade>
    <Fade duration={600}>
      <Link to="/historical_homecrafters/">
        <div className="case-study-container">
          <img src={historical_homecrafters} className="case-study-thumb" />
        </div>
      </Link>
    </Fade>
  </div>
)

export default IndexPage
