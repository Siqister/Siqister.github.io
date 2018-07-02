import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      padding: '.5rem 1rem',
      width: '100%',
      position: 'fixed',
      top: 0,
      zIndex: 999,
      display: 'flex'
    }}
    className='header'
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          fontSize: '1.25rem',
          fontWeight: 500,
          color: 'rgb(0,0,220)',
          fontFamily: 'Overpass Mono'
        }}
      >
        {`INPUT/OUTPUT`}
      </Link>
    </h1>
  </div>
)

export default Header
