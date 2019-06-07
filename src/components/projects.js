import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component{
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories(){
		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					{this.showSavemycapProject()}
					{this.showPersonalPortfolioWebsite()}
					{this.showSlapYourEnermyGameProject()}
					{this.showKnowItAllProject()}
				</div>
			)
		} else if (this.state.activeTab === 1) {
			return (
				<div className="projects-grid">
					{this.showSavemycapProject()}
					{this.showPersonalPortfolioWebsite()}
				</div>
			)
		} else if (this.state.activeTab === 2) {
			return (
				<div className="projects-grid">
					{this.showSlapYourEnermyGameProject()}
				</div>
			)
		} else if (this.state.activeTab === 3) {
			return (
				<div className="projects-grid">
					{this.showKnowItAllProject()}
				</div>
			)
		}
	}

	/* savemyCAP web project */
	showSavemycapProject() {
		return (
			<Card shadow= {5} style= {{minWidth: '600', margin:'auto'}}>
				<CardTitle expand style={{color: 'black', height: '280px', background: 'url(images/savemycap_logo.png) center / cover'}} >SaveMyCAP</CardTitle>
				<CardText>
					<p>
					An easy-to-use web application that aims to help students keep track of their academic results and facilitate target setting.
					</p>
					<br></br>
					<br></br>
					<p>Built with a friend, using Meteor, MongoDB, NodeJS, Heroku, HTML and CSS. </p>
				</CardText>
				<CardActions border>
					<Button colored> <a href="http://github.com/KerrynEer/savemycap" rel="noopener noreferrer" target="_blank">GitHub</a> </Button>
					<Button colored> <a href="http://savemycap.herokuapp.com" rel="noopener noreferrer" target="_blank">Try it out here!</a> </Button>
				</CardActions>
			</Card>
		);
	}

	/* Personal portfolio website */
	showPersonalPortfolioWebsite() {
		return (
			<Card shadow= {5} style= {{minWidth: '600', margin:'auto'}}>
				<CardTitle expand style={{color: 'white', height: '280px', background: 
				'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >
				Personal Portfolio Website</CardTitle>
				<CardText>
					<p>Yes this is the one you are looking at right now!</p>
					<br></br>
					<br></br>
					<p>Built using React, NodeJS, HTML and CSS. </p>
				</CardText>
				<CardActions border>
					{/* TO ADD GITHUB LINK HERE*/}
					<Button colored>GitHub</Button>

				</CardActions>
			</Card>
		);
	}

	/* Slap your enemy game */
	showSlapYourEnermyGameProject() {
		return (
			<Card shadow= {5} style= {{minWidth: '600', margin:'auto'}}>
				<CardTitle expand style={{color: 'black', height: '280px', background: 'url(images/slapyourenermy_logo.png) center / cover'}} >Slap Your Enermy</CardTitle>
				<CardText>
					<p>
					A highly addictive game to relieve one's stress by slapping as fast as you can within 10 seconds. 
					</p>
					<br></br>
					<br></br>
					<p>Built during a 24-hour hackathon (NUS Hack and Roll 2019) in a team of 4 using Phaser. </p>
				</CardText>
				<CardActions border>
					<Button colored> <a href="http://github.com/KerrynEer/SlapYourEnermy" rel="noopener noreferrer" target="_blank">GitHub</a> </Button>
					<Button colored> <a href="http://kerryneer.github.io/SlapYourEnermy/main.html" rel="noopener noreferrer" target="_blank">Slap here!</a> </Button>
				</CardActions>
			</Card>
		);
	}

	/* Know-It-All Software Engineering Project */
	showKnowItAllProject() {
		return (
			<Card shadow= {5} style= {{minWidth: '600', margin:'auto'}}>
				<CardTitle expand style={{color: 'black', height: '280px', background: 'url(images/knowitall_logo.png) center / contain no-repeat '}} ></CardTitle>
				<CardText>
					<p>
					A flashcard management app designed to help medical students store, organise and share their learning material, integrated with a test session feature and scoring system to allow for 
					a more efficient rote learning process. 
					</p>
					<br></br>
					<br></br>
					<p>In a team of 5, we morphed a command line interface addressbook into Know-It-All for NUS CS2103T Software Engineering Project. It is written in Java and GUI is created with JavaFX. It has about 10kLoC.</p>
				</CardText>
				<CardActions border>
					<Button colored> <a href="http://github.com/cs2103-ay1819s2-w10-4/main" rel="noopener noreferrer" target="_blank">GitHub</a> </Button>
					<Button colored> <a href="http://cs2103-ay1819s2-w10-4.github.io/main/team/kerryneer.html" rel="noopener noreferrer" target="_blank">Project Portfolio</a> </Button>
				</CardActions>
			</Card>
		);
	}


	render() {
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
					<Tab><h4>All</h4></Tab>
					<Tab><h4>Web</h4></Tab>
					<Tab><h4>Game</h4></Tab>
					<Tab><h4>Software Engineering</h4></Tab>
				</Tabs>

				<Grid>
					<Cell col= {12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Projects;