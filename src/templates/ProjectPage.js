import React from 'react';
import _ from 'lodash';
import Link from 'gatsby-link';

export default ({ data }) => {
	console.log(data);

	const { frontmatter, html } = data.markdownRemark;

	return (
		<div className='project'>
			<h3>{frontmatter.title}</h3>
			<div dangerouslySetInnerHTML = {{__html: html}}/>
			<div className='tags-list'>
				{
					frontmatter.tags.map(tag => 
						<span className='tag' key={tag}>
							<Link to={`/tags/${_.kebabCase(tag)}`} >{tag}</Link>
						</span>
					)
				}
			</div>
		</div>
	)
}

export const query = graphql`
	query ProjectPageQuery ($slug:String!) {
		markdownRemark (fields: { slug: {eq: $slug } }){
			frontmatter {
				title
				date
				tags
			}
			html
		}
	}
`