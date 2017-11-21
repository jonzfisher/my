import React from 'react'
import { navigateTo} from 'gatsby-link'
import { Fade, Zoom, Flip } from 'react-reveal'
import historical_homecrafters from './historical_homecrafters.png'
import continue_wip from './continue_wip.png'
import tachyons from 'tachyons'

const IndexPage = () => (
  <div>
    <Fade duration={800} delay={400}>
      <h1 className="f2-ns f3 w-100 w-50-ns"
        style={{
          paddingTop: '2rem',
          lineHeight: '1.25',
          color: '#022533',
        }}>
        Hi, I’m Jonathan Fisher, a web developer who enjoys the creative process.
      </h1>
    </Fade>
    <Fade duration={600}>
      <div className="flex justify-between">
        <a href="https://dribbble.com/shots/3942531-Continue" className="case-study-container dib">
          <img src={continue_wip} className="case-study-thumb" />
        </a>
        <a href="http://historicalhomecrafters.com/"
          className="case-study-container dib">
          <img src={historical_homecrafters} className="case-study-thumb" />
        </a>
      </div>
    </Fade>
    <Fade duration={2000} delay={300}>
      <p className="i gray f4">A case study for Historical Homecrafters coming soon...</p>
    </Fade>
  </div>
)

export default IndexPage
