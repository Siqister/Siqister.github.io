import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Menu from '../components/Menu';
import Footer from '../components/footer'
import './index.css'

class Layout extends Component{

  constructor(props){
    super(props);

    this.state = {
      isMenuOpen: false
    }
  }

  render(){
    const { children, data } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu 
          isMenuOpen={isMenuOpen}
          onToggle={() => { this.setState({isMenuOpen:!isMenuOpen}) }}
          tags={data.allMarkdownRemark.group.map(d => d.fieldValue).sort((a,b) => (b - a))}
        />
        <main
          style={{
            margin: '0 auto',
            padding: '0 0 1.45rem',
            marginTop: '6rem',
            transform: `translate(${isMenuOpen?'-300px':'0'})`,
            transition: 'all .2s'
          }}
          className='container'
        >
          {children()}
        </main>
        <Footer />
      </div>
    )
  }

}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark{
      group(field: frontmatter___tags){
        fieldValue
        totalCount
      }
    }
  }
`
