export const ProjectQueryFragment = graphql`
	fragment ProjectQueryFragment on MarkdownRemark{
		fields{
			slug
		}
		frontmatter{
			title
			tags
			date
      thumb {
        publicURL
        childImageSharp{
					sizes(maxWidth:1200){
						src
						srcSet
						aspectRatio
						sizes
					}
				}
			}
		}
	}
`