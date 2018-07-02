import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import _ from 'lodash';

const projectStyle = {
	padding: '1.5rem 1rem',
	textAlign: 'center'
}

const tagStyle = {
	padding: '0 .5rem',
	fontSize: '.625rem',
	lineHeight: 1.6,
}

const Project = ( {data:project} ) => {

	const {tags, title, date, thumb} = project.frontmatter;
	
	return (
		<div className='project thumb' style={projectStyle}>
			<div className='tags-list'>
				{
					tags.map(tag => 
						<span className='tag meta' key={tag} style={tagStyle}>
							<Link to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>
						</span>
					)
				}
			</div>
			<Link to={project.fields.slug}>
				<h3>
					{title}
				</h3>
				{thumb.childImageSharp?
					<Img sizes={thumb.childImageSharp.sizes} title={title} alt={title} />:
					<img src={thumb.publicURL} title={title} alt={title} />
				}
			</Link>
		</div>
	);
}

export default ( {projects} ) => 
	<div className='project-index'>
		{projects.map(project => 
			<Project data={project} key={project.fields.slug} />
		)}
	</div>