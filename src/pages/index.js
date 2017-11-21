import React from 'react'
import { navigateTo} from 'gatsby-link'
import { Fade, Zoom, Flip } from 'react-reveal'
import historical_homecrafters from './historical_homecrafters.png'
import continue_wip from './continue_wip.png'

const IndexPage = () => (
  <div style={{marginTop: '2rem'}}>
    <Fade duration={800} delay={400}>
      <h1
        style={{
          width: '16rem',
          fontSize: '2rem',
          color: '#022533',
        }}
        >Hi, I’m Jonathan Fisher, a web developer who enjoys the creative process.</h1>
    </Fade>
    <Fade duration={600}>
      <div className="case-study-container">
        <img src={continue_wip} className="case-study-thumb" />
      </div>
    </Fade>
    <Fade duration={600}>
      {/* <Link to="/historical_homecrafters/"> */}
        <div className="case-study-container" onClick={ () => navigateTo('/historical_homecrafters')}>
          <img src={historical_homecrafters} className="case-study-thumb" />
        </div>
      {/* </Link> */}
    </Fade>
    <div style={{height: '10rem'}}></div>
  </div>
)

export default IndexPage
