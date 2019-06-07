import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">	
					<Cell col= {6} >
						<h2>Contact Me</h2>
						<hr/>
						<p  style={{ margin: 'auto', paddingTop: '1em'}}> Do not hesitate to contact me if you have any internship/job offers or projects you would like me to work on!</p>
						<div className="contact-list">
							<List>
							  <ListItem>
							    <ListItemContent style={{margin: 'auto', color: 'white', fontSize: '21px', fontFamily: 'Patrick Hand Regular'}}> <i className="fa fa-envelope" aria-hidden="true"/> kerryneer98@gmail.com</ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent style={{color: 'white', fontSize: '21px', fontFamily: 'Patrick Hand Regular'}}> <i className="fa fa-linkedin" aria-hidden="true"/> <a href="http://linkedin.com/in/kerryn98" rel="noopener noreferrer" target="_blank">linkedin.com/in/kerryn98</a></ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent style={{color: 'white', fontSize: '21px', fontFamily: 'Patrick Hand Regular'}}> <i className="fa fa-github" aria-hidden="true"/> <a href="http://github.com/KerrynEer" rel="noopener noreferrer" target="_blank">github.com/KerrynEer</a></ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent style={{color: 'white', fontSize: '21px', fontFamily: 'Patrick Hand Regular'}}> <i className="fa fa-map-pin" aria-hidden="true"/> Singapore</ListItemContent>
							  </ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;