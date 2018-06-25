import React from 'react'
import Link from 'gatsby-link'

import ProjectList from '../components/ProjectList';

//index page of all projects
export default ( {data} ) => {
	const projects = data.allMarkdownRemark.edges.map(edge => edge.node);
	return <ProjectList projects={projects} />
}

export const query = graphql`
	query ProjectIndexQuery{
	  allMarkdownRemark(filter:{frontmatter:{category:{eq:"project"}}}){
	    edges{
	      node{
					...ProjectQueryFragment
	      }
	    }
	  }
	}
`