import React from 'react'
import Link from 'gatsby-link'
import { Fade, Zoom, Flip } from 'react-reveal'

const IndexPage = () => (
  <div style={{marginTop: '2rem'}}>
    <Fade duration={1600} delay={1200}>
      <h1 style={{width: '16rem', fontSize: '2rem'}}>Hi, I’m Jonathan Fisher, a web developer that loves the creative process.</h1>
    </Fade>
    <Fade left duration={1200}>
      <div className="case-study-container">
        <img src="/images/continue_wip.png" className="case-study-thumb" />
      </div>
    </Fade>
    <Fade left duration={1200}>
      <Link to="/historical_homecrafters/">
        <div className="case-study-container">
          <img src="/images/historical_homecrafters.png" className="case-study-thumb" />
        </div>
      </Link>
    </Fade>
  </div>
)

export default IndexPage
