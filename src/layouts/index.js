import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Fade } from 'react-reveal'
import Tachyons from 'tachyons'
import logo from './logo.svg'
import banner_cover from './banner_cover.jpg'
import './index.css'

const Header = () => (
  <header>
    <Fade duration={800}>
      <div className="banner_cover"
        style={{
          marginBottom: '2rem',
          backgroundImage: `url(${banner_cover})`,
          minHeight: '10rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '3rem 2rem',
          }}
        >
          <Fade top duration={800} delay={400}>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
              }}
            >
              <Fade>
                <img className="logo" src={logo} />
              </Fade>
            </Link>
          </Fade>
        </div>
      </div>
    </Fade>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div className="sans-serif">
    <Helmet
      title="Jonathan Fisher"
      meta={[
        { name: 'description', content: 'Jonathan Fisher is a web developer and designer that has interest in storytelling on the web.' },
        { name: 'keywords', content: 'web, development, design, design systems, tachyons' },
        { name: 'google-site-verification', content: 'iiExnczsKs14-yJbVE2NhRlNWgD-wXCbYiWh12kN-X0' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Spectral:400,500i,600,800,800i" rel="stylesheet" />
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 2rem 3rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <footer className="spectral db m0 w-100">
      <div className="mw8 center ph5 pv4 f5 fw7">
        <a href="http://github.com/jonzfisher" title="Github" className="dib link navy">Github</a>
        <a href="http://twitter.com/@jonzfisher" title="Github" className="dib link navy pl2">Twitter</a>
        <a href="http://medium.com/@jonzfisher" title="Medium" className="dib link navy pl2">Medium</a>
      </div>
    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
