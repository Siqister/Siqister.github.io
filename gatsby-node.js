const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const _ = require('lodash');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators;

	if(node.internal.type === 'MarkdownRemark'){
		const slug = createFilePath({ 
			node, 
			getNode, 
			basePath:`pages`
		});

		createNodeField({
			node,
			name: `slug`,
			value: slug
		})
	}
}

exports.createPages = ({ graphql, boundActionCreators }) => {

	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {

		graphql(`
				{ 
					allMarkdownRemark {
						edges {
							node {
								fields {
									slug
								}
								frontmatter{
									tags
								}
							}
						}
					}
				}
			`).then(results => {

				const { edges } = results.data.allMarkdownRemark;

				//Create individual project page at /${slug}/
				edges.forEach(({ node }) => {
					//Use node.fields.slug data to generate a custom query that powers template components
					createPage({
						path: node.fields.slug,
						component: path.resolve('./src/templates/ProjectPage.js'),
						context: {
							// Data passed to context is available in page queries as GraphQL variables.
							slug: node.fields.slug
						}
					})
				});

				//Create tags page at /tag/${tag}
				const tags = _.uniq(
						edges.reduce((acc, { node }) => {
							return acc.concat(node.frontmatter.tags)
						}, [])
					);
				tags.forEach(tag => {
					createPage({
						path: `/tags/${_.kebabCase(tag)}`,
						component: path.resolve('./src/templates/Tag.js'),
						context: {
							tag: tag
						}
					})
				});

				resolve();
			})

	});

}