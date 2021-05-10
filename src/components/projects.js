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
          {this.showGuessTheGibGameProject()}
					{this.showKnowItAllProject()}
					{this.showSDRLeaksProject()}
          {this.showDistributedDbProject()}
          {this.showPersonalPortfolioWebsite()}
          {this.showPetsGoWhereProject()}
          {this.showSavemycapProject()}
          {this.showSlapYourEnermyGameProject()}
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
          {this.showGuessTheGibGameProject()}
					{this.showSlapYourEnermyGameProject()}
				</div>
			)
		} else if (this.state.activeTab === 3) {
			return (
				<div className="projects-grid">
					{this.showKnowItAllProject()}
				</div>
			)
		} else if (this.state.activeTab === 4) {
			return (
				<div className="projects-grid">
					{this.showSDRLeaksProject()}
				</div>
			)
		} else if (this.state.activeTab === 5) {
			return (
				<div className="projects-grid">
					{this.showDistributedDbProject()}
				</div>
			)
		} else if (this.state.activeTab === 6) {
			return (
				<div className="projects-grid">
					{this.showPetsGoWhereProject()}
				</div>
			)
		}
	}

	/* savemyCAP web project */
	showSavemycapProject() {
		return (
			<Card shadow= {5} style= {{minWidth: '550', margin:'auto', marginTop:'10px'}}>
				<CardTitle expand style={{color: 'black', height: '280px', background: 'url(images/savemycap_logo.png) center / cover'}} >SaveMyCAP</CardTitle>
				<CardText>
					<p>
					An easy-to-use web application that aims to help students keep track of their academic results and facilitate target setting. This is my very first self-directed software development project! 
					</p>
					<br></br>
					<p>Built with a friend, using Meteor, MongoDB, Node.js, Heroku, HTML and CSS. </p>
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
			<Card shadow= {5} style= {{minWidth: '550', margin:'auto', marginTop:'10px'}}>
				<CardTitle expand style={{color: 'white', height: '280px', background: 
				'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >
				Personal Portfolio Website</CardTitle>
				<CardText>
					<p>Yes this is the one you are looking at right now! Self-taught by following online tutorials and exploring on my own!</p>
					<br></br>
					<p>Built using React, Node.js, HTML and CSS, hosted on <strike>Heroku</strike> Github Pages.</p>
				</CardText>
				<CardActions border>
					<Button colored> <a href="http://github.com/KerrynEer/kerryn" rel="noopener noreferrer" target="_blank">GitHub</a> </Button>

				</CardActions>
			</Card>
		);
	}

	/* Slap your enemy game */
	showSlapYourEnermyGameProject() {
		return (
			<Card shadow= {5} style= {{minWidth: '550', margin:'auto', marginTop:'10px'}}>
				<CardTitle expand style={{color: 'black', height: '280px', background: 'url(images/slapyourenermy_logo.png) center / cover'}} >Slap Your Enemy</CardTitle>
				<CardText>
					<p>
					A highly addictive game to relieve one's stress by slapping as fast as you can within 10 seconds. 
					</p>
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
  
  /* Guess the Gibberish game */
	showGuessTheGibGameProject() {
		return (
			<Card shadow= {5} style= {{minWidth: '550', margin:'auto', marginTop:'10px'}}>
				<CardTitle expand style={{color: 'white', height: '240px', background: 'url(images/guessthegib_logo.png) center / cover'}} ></CardTitle>
				<CardText>
					<p>
            Inspired by the Guess The Gibberish game, this is a multiplayer web version with a localised Singapore theme! Gather your friends and try it now!
					</p>
					<br></br>
					<p>Collaborated with a team of NUS and NTU students as part of Google Software Product Sprint. Built using React, Node.js, Socket.io and Redis. </p>
				</CardText>
				<CardActions border>
					<Button colored> <a href="https://github.com/KerrynEer/gibberish" rel="noopener noreferrer" target="_blank">GitHub</a> </Button>
					<Button colored> <a href="https://guessthegib.web.app" rel="noopener noreferrer" target="_blank">Guess now!</a> </Button>
				</CardActions>
			</Card>
		);
	}

	/* Software Defined Radio Leaks */
	showSDRLeaksProject() {
		return (
			<Card shadow= {5} style= {{minWidth: '550', margin:'auto', marginTop:'20px'}}>
				<CardTitle expand style={{color: 'black', height: '220px', background: 'url(images/sdrLeak.png) center / contain no-repeat '}} >Software Defined Radio Leaks</CardTitle>
				<CardText>
					<p>
					Using a Software Defined Radio (SDR) - HackRF One, along with other tools like GNU Radio and Gqrx, we sniffed wireless transmissions between a keyboard (Logitech K270 Wireless Keyboard) and a computer. We managed to achieve a partial break - able to detect and capture keypresses on the keyboard, but faced difficulty in decrypting these keypresses to obtain valuable information without the private key.
					</p>
					<br></br>
					<p>All 4 of us are proud to be awarded 1st Prize in NUS School of Computing Term Project Showcase (15th STEPS) for CS3235 Computer Security.</p>
				</CardText>
				<CardActions border>
					<Button colored> <a href="Software Defined Radio Leaks.pdf" download>Project Poster</a> </Button>
					<Button colored> <a href="CS3235 Group 20 Final Report.pdf" download>Project Report</a>  </Button>
				</CardActions>
			</Card>
		);
	}

	/* Know-It-All Software Engineering Project */
	showKnowItAllProject() {
		return (
			<Card shadow= {5} style= {{minWidth: '550', margin:'auto', marginTop:'20px'}}>
				<CardTitle expand style={{color: 'black', height: '200px', background: 'url(images/knowitall_logo.png) center / contain no-repeat '}} ></CardTitle>
				<CardText>
					<p>
					A flashcard management app designed to help medical students store, organise and share their learning material, integrated with a test feature and scoring system to allow for 
					a more efficient rote learning process.</p>
					<p>We applied Software Engineering Principles and Patterns throughout implementation and wrote detailed documentation. Go over to my Project Portfolio to see some snippets of my contributions!
					</p>
					<br></br>
					<p>In a team of 5, we morphed a CLI addressbook into Know-It-All. It is written in Java and GUI is created with JavaFX. It has about 10kLoC.</p>
				</CardText>
				<CardActions border>
					<Button colored> <a href="http://github.com/cs2103-ay1819s2-w10-4/main" rel="noopener noreferrer" target="_blank">GitHub</a> </Button>
					<Button colored> <a href="http://cs2103-ay1819s2-w10-4.github.io/main/team/kerryneer.html" rel="noopener noreferrer" target="_blank">Project Portfolio</a> </Button>
				</CardActions>
			</Card>
		);
	}

  /* Distributed database project */
  showDistributedDbProject() {
    return (
			<Card shadow= {5} style= {{minWidth: '550', margin:'auto', marginTop:'10px'}}>
				<CardTitle expand style={{color: 'black', height: '220px', background: 
				'url(https://www.cockroachlabs.com/wp-content/uploads/2020/08/cassandra-vs-cockroachdb-2.png) center / contain no-repeat'}} >
				Distributed Database</CardTitle>
				<CardText>
          <p>A challenging project to employ distributed databases to implement an application for wholesale suppliers managing their warehouse stock and customer transactions.
          We explored 2 different kinds - <b>Apache Cassandra</b> & <b>CockroachDb</b>.</p>
          <p>We installed the distributed database system on a cluster of machines, designed the data modelling, 
            and implemented transactions to support an application while considering the app's workload and database system's key features, 
            and benchmarked its performance.
            </p>
					<br></br>
					<p>Done in a group of 4 over 4 months, using Java.</p>
				</CardText>
				<CardActions border>
					<Button colored> <a href="https://github.com/CS4224-Distributed-Databases" rel="noopener noreferrer" target="_blank">Github</a> </Button>
				</CardActions>
			</Card>
		);
  }

  /* PetsGoWhere Interaction Design */
	showPetsGoWhereProject() {
		return (
			<Card shadow= {5} style= {{minWidth: '550', margin:'auto', marginTop:'10px'}}>
				<CardTitle expand style={{color: 'black', height: '220px', background: 
				'url(images/petsgowhere_logo.png) center / contain no-repeat'}} >
				PetsGoWhere</CardTitle>
				<CardText>
          <p>A platform to connect pet owners/ organisations with potential adopters!</p>
          <br></br>
					<p>An Interaction Design project by following the Design Process closely to conduct Contextual Inquiries with our target audience, before drawing Affinity Diagrams and Personas to analyse the problem in detail. 
            Throughout multiple iterations of prototyping from storyboarding to wireframes to high-fidelity prototypes, we conducted both quantitative and qualitative evaluations with potential users.</p>
					<br></br>
					<p>Done in a group of 4 over 3 months, using Balsamiq & Figma.</p>
				</CardText>
				<CardActions border>
					<Button colored> <a href="https://petsgowhere.gtsb.io/" rel="noopener noreferrer" target="_blank">Portfolio</a> </Button>
          <Button colored> <a href="https://www.figma.com/proto/3MynveuT4OF8AnttyGhTsL/CS3240-Group-16-G3---PetsGoWhere?kind=&node-id=17%3A0&page-id=0%3A1&scaling=scale-down" rel="noopener noreferrer" target="_blank">Prototype</a> </Button>
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
					<Tab><h4>Desktop</h4></Tab>
					<Tab><h4>Security</h4></Tab>
          <Tab><h4>Database</h4></Tab>
          <Tab><h4>Design</h4></Tab>
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