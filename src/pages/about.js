import React from 'react';
import resume from './Siqi_Zhu_resume.pdf';

export default () => 
	<div 
		className='about single'
		style={{
			padding:'.5rem 1rem'
		}}
	>
		<div 
			className='main' 
			style={{
				display:'flex'
			}}
		>
			<div className='metadata'>
				<dl>
					<dt className='meta'>For download</dt>
					<dd><a href={resume}>Resume</a></dd>
					<dt className='meta'>Find me elsewhere</dt>
					<dd>
						<ul style={{ listStyle:'none' }}>
							<li><a href='http://github.com/siqister'>Github</a></li>
							<li>siqi.zhu [at] gmail.com</li>
						</ul>
					</dd>
				</dl>
			</div>
			<div 
				className='content' 
			>
				<p
					className='lead'
					style={{
						fontSize: '2rem',
						lineHeight: 1.2
					}}
				>
					Hello, I'm an urban designer and technologist working at the intersection of <span className='highlight'>design</span>, <span className='highlight'>technology</span>, <span className='highlight'>strategy</span>, and <span className='highlight'>the built environment</span>.
				</p>
				<p>As an urban designer, I have led the development of Boston Complete Streets guidelines (winner of 2015 APA National Award in communication design); Go Boston 2030, the city's 20-year strategic mobility plan; a long-term design, implementation, and operational plan for the City of Grand Rapids parks department; as well as a strategic framework for the Mexico City campuses of ITESM, Mexico's largest private university system. I bring a clear design sensibility and an innovative approach to data analysis and storytelling to these diverse projects across different contexts and client types.</p>
				<p>My technology work broadly focuses on an interest in understanding and communicating urban complexity and galvanizing collective urban action. As a project lead at MIT Senseable City Lab, adjunct professor in information design at Northeastern University, and as a freelance developer, I continue to explore this interest through a variety of projects.</p>
				<p>A designer with strong programming abilities, I'm proficient with both frontend and backend technologies, and enjoy exploring the creative potential of new(-ish) technologies such as WebGL and deep learning.</p>
				<p>I now work at <span className='highlight'><a href="http://envelope.city">Envelope.City</a></span>, where I head up product design of cutting-edge 3D urban spatial analysis and visualization software, and at Northeastern University, where I teach graduate-level courses in information design and visualization. I continue to look for speculative project opportunities that intersect with my skills and intellectual interests.</p>
			</div>
		</div>
	</div>