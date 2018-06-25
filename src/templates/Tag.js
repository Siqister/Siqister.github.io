import React from 'react';
import ProjectList from '../components/ProjectList';

export default ( {data} ) => {
	const projects = data.allMarkdownRemark.edges.map(edge => edge.node);
	return <ProjectList projects={projects} />
}

export const query = graphql`
	query TagQuery($tag:String!){
		allMarkdownRemark(filter:{frontmatter:{tags:{in:[$tag]}}}){
			edges{
				node{
					...ProjectQueryFragment
				}
			}
		}
	}
`