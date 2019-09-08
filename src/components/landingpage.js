import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component{
	render() {
		return(
			<div className="background" style={{width: '100%', margin:'auto'}}>
			    
				<Grid className="landing-grid">
					<Cell col={12}>
					<h1>Kerryn</h1>

					<div className="banner-text"> 
						<h2>Hi! I am a penultimate Computer Science Undergraduate at National University of Singapore and welcome to my personal website.</h2>
						<hr/>
						<br></br>
		
						<div className="links-to-pages">

							<a href="/resume">
								<i className="fa fa-file-text" aria-hidden="true"></i>
								<p>Resume</p>
							</a>

							<a href="/projects">
								<i className="fa fa-laptop" aria-hidden="true"></i>
								<p>Projects</p>
							</a>

							<a href="/contact">
								<i className="fa fa-phone" aria-hidden="true"></i>
								<p>Contact</p>
							</a>
						</div>
					</div>
					</Cell>

				</Grid>
			</div>
		)
	}
}

export default LandingPage;
