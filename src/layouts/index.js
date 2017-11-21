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
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
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
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
