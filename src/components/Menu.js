import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Link from 'gatsby-link';
import _ from 'lodash';

const menuContainerStyle = {
	position: 'fixed',
	height: '100%',
	width: '300px',
	top:0,
	left: '100%',
	padding:'.5rem 1rem',
	zIndex: 1000,
	transition: 'all .2s',
}

const navListItemStyle = {
	color:'rgb(0,0,220)',
	fontSize: '1.25em',
	lineHeight: 1.2,
	margin: '.5em 0',
	padding: '0 0 .5em',
	//borderBottom: '1px solid hsla(0,0%,0%,.1)'
}

const tagsListItemStyle = {
	fontSize: '1rem',
	fontFamily: 'Overpass Mono',
	padding: '.25rem 0'
}

export default ({ isMenuOpen, onToggle, tags }) => {
	return (
		<div
			style={Object.assign({}, menuContainerStyle, {transform:`translate(${isMenuOpen?'-300px':'0'})`})}
		>
			<span style={{
				position:'absolute',
				left:'-1rem',
				top:'1rem',
				transform: 'translate(-100%)',
				cursor: 'pointer'
			}}>
				<HamburgerMenu
					menuClicked={onToggle}
					isOpen={isMenuOpen}
					color='rgb(0,0,220)'
					width={24}
					height={20}
					strokeWidth={3}
					animationDuration={.2}
				/>
			</span>
			<nav>
				<ul style={{
					listStyle:'none'
				}}>
					<li style={navListItemStyle}>
						<Link to='/'>Projects</Link>
						<ul 
							style={{
								listStyle:'none',
								marginLeft: 0
							}}
							className='tags-list'
						>
							{tags.map(tag => 
								<li key={tag} style={tagsListItemStyle}>
									<Link to={`/tags/${_.kebabCase(tag)}`}>{_.capitalize(tag)}</Link>
								</li>
							)}
						</ul>
					</li>
					<li style={navListItemStyle}><span style={{textDecoration:'line-through'}}>Writing</span> (coming soon)</li>
					<li style={navListItemStyle}><Link to='/about'>About</Link></li>
				</ul>
			</nav>
		</div>
	)
}

