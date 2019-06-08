import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
	render() {
		return(
			<div>
				<Grid>
					<Cell className="resume-left-col" col = {3.5}>
						
						<div style = {{textAlign:"center"}}>
							 <h2>Kerryn Eer</h2>
							 <img src="images/dp.jpg" alt="pic" style={{height: '290px'}} />
							 <h4>My coding experience began not long ago in 2017 when I join NUS Computer Science. 
							 I enjoy the challenge and am not afraid to learn new things on my own and on the go.</h4>
							 
							 <h4>Currently, looking for an internship in Winter 2019 (Dec 2019) and in Summer 2020 (May-July 2020).
							 Particularly, interested anything related to ArtificiaI Intelligence/ Security/ Software Engineering. 
							 </h4>

							 <h5>Too much information? Look out for stars <b className="fa fa-star" aria-hidden="true"></b> that highlight my notable achievements!
							  <br/>
							  <br/>
							  Grab a copy of the summarised resume <a href="resume080619.pdf" download>here</a>!
							 </h5>
						</div>
					</Cell>
					<Cell className="resume-right-col" col={8}>
						 <h2>Experience</h2>
						 <hr style={{borderTop: '3px dotted', width: '85%'}}/>
						 <Experience
						 	startYear= {'May'}
						 	endYear = {'Sep 2019 Present'}
						 	jobName = {'Advisor for NUS Independent Software Development Project'}
						 	jobCompany = {'National University of Singapore'}
						 	jobDescription = {'This program, also known as Orbital, gives first-year NUS students the opportunity to pick up software development skills on their own, using sources on the web. As an advisor, I assess and evaluate the progress of the teams I oversee and guide them through the project.'}
						 />
						 <hr style={{borderTop: '1px solid', width: '85%'}}/>
						 <Experience
						 	startYear= {'Aug'}
						 	endYear = {'Dec 2018'}
						 	jobName = {'Teaching Assistant'} 
						 	important = {'TRUE'}
						 	jobCompany = {'National University of Singapore'}
						 	jobDescription = {'Prepared and conducted 2 hour weekly tutorial sessions with a class of 12 students, as well as grading assignments for CS1010 Programming Methodology, an introductory programming module  taught in C that covers fundamental concepts of programming and problem solving.'}
						 />
						 <hr style={{borderTop: '1px solid', width: '85%'}}/>
						 <Experience
						 	startYear= {'May'}
						 	endYear = {'July 2017'}
						 	jobName = {'Public Service Commission (PSC) iExperience Intern'}
						 	jobCompany = {'Ministry Of Education (MOE) HQ Arts Education Branch'}
						 	jobDescription = {'I helped in the organisation and implementation of SYF Celebrations 2017 held in July, coordinating various admin, publicity and logistics needed (e.g. meals, transport) as well as liaising with schools, trainers and venue partners on all the performance requirements. I also designed posters for the event and maintained the SYF social media accounts like Instagram.'}
						 />

						 <hr style={{borderTop: '1px solid', width: '85%'}}/>
						 <Experience
						 	startYear= {'Jan'}
						 	endYear = {'Feb 2015'}
						 	jobName = {'Intern at Science Centre Singapore'}
						 	jobCompany = {'Science Centre Singapore'}
						 	jobDescription = {'As part of the Wonder! Observe! Weave! Attachment Programme by Temasek JC, together with a fellow intern, we planned and designed various activities for the Brain Awareness Week and a secondary school camp to be hosted at science centre. The puzzle trail we came up with impressed the public and we got featured on the Chinese newspaper ‘Lian He Zao Bao’ commending us for our work. We also assisted the staff in conducting lab sessions for students.'}
						 />

						 <h2>Education</h2>
						  <hr style={{borderTop: '3px dotted', width: '85%'}}/>
						 <Education 
						 	startYear= {2017}
						 	endYear = {'2021 Present'}
						 	schoolName = "National University of Singapore"
						 	schoolDegree = "Bachelor of Computing with Hons (Computer Science)"
						 	schoolDescriptionDegree = { ['CAP: 4.76/5.0', 'Programming Methodology I & II , Discrete Structures, Linear Algebra, Calculus for Computing, Statistics and Probability, Data Structures and Algorithms, Computer Organization, Operating Systems, Computer Networks, Physics Fundamentals, Machine Learning, Software Engineering, Information security, Cybersecurity, Effective Communication for Computing Professionals']}
						 	important = {'TRUE'}
						 	schoolAwards = "Awards"
						 	schoolDescriptionAwards = { ['NUS Merit Scholarship 2017-2021'] }
						 	schoolLeadership = "Activities"
						 	schoolDescriptionLeadership = { ['Medic for NUS Computing Freshmen Orientation Week 2018', 'Member of Organising Committee for NUS Computing Freshmen Social Camp 2018', 'Helper at NUS Computing Day 2018'] }
						 	schoolCommService = "Community Service"
						 	schoolDescriptionCommService = { ['Ang Mo Kio Family Service Centre Project Spright Academy Organising Committee Manpower and Logistics IC', 'NUS Computing Club Community Service Cell Member 2017-2018', 
						 	'NUS Rag & Flag Beneficiary Engagement Day @ Fernvale Gardens School (MINDS) 2017, 2018' ]} 
						 />

						 <hr style={{borderTop: '1px solid', width: '85%'}}/>

						 <Education 
						 	startYear= {2013}
						 	endYear = {2016}
						 	schoolName = "Temasek Junior College"
						 	schoolDegree = "Singapore-Cambridge GCE A-Levels"
						 	schoolDescriptionDegree = { ['Rank Point: 87.5/90', 'H3 Biology at NUS, H2 Biology, H2 Chemistry, H2 Mathematics, H2 Economics, H1 General Paper, H1 Project Work']}
						 	important = {'TRUE'}
						 	schoolAwards = "Awards"
						 	schoolDescriptionAwards = { ['MOE Edusave Merit Bursary 2016', 'Lim Lai Cheng Trophy – TJC IP Overall Best Student 2015', 
						 		'Loke-Yeo Teck Yong Trophy – Best IP Student (Year 4) 2014' , 'Young Defence Scientist Programme Academic Award (Maths) 2015', 
						 		'MOE Edusave Character Award (ECHA) 2014', 'Subject Awards (Intermediate Maths, Geography) - Best performing student in the cohort for both Intermediate Maths and Geography 2014', 
						 		'MOE Edusave Scholarship 2014'] }
						 	schoolLeadership = "Leadership"
						 	schoolDescriptionLeadership = { ['Vice-President of Guitar Ensemble 2016', 'Secretary of Guitar Ensemble 2015', 'CARE Representative of class committee 2014', 'Facilitator in JC and IP orientation 2014, 2016',
						 		'Participant in Student Leadership Camp and Congress 2015, 2014', 'Participant in Outward Bound Singapore Peer Leadership Programme 2013'] }
						 	schoolCommService = "Community Service"
						 	schoolDescriptionCommService = { ['Overseas VIA at Tanjong Balai 2014', 'Friends of the Library Portal various CIPs 2013, 2014',  
						 		'Give free tuition @ Tampines North CC and Siglap CC 2013']} 
						 />


						 <h2>Skills</h2>
						  <hr style={{borderTop: '3px dotted', width: '85%'}}/>
						  <h4>Computing</h4>
						  <Skills
			                skill="Java, C, Object Oriented Programming"
			                progress={95}
			               />
			               <Skills
			                skill="Web Dev (HTML, CSS, Heroku)"
			                progress={90}
			               />
			               <Skills
			                skill="Web Dev (Meteor, React, MongoDB)"
			                progress={80}
			               />
			               <Skills
			                skill="Git"
			                progress={85}
			               />
			               <Skills
			                skill="Unix, vim"
			                progress={80}
			               />
			               <Skills
			                skill="Javascript, Python"
			                progress={60}
			               />

			             <hr style={{borderTop: '1px solid', width: '85%'}}/>

			             <h4>Interests</h4>
			               <Skills
			                skill="Chinese Calligraphy and Painting"
			                progress={85}
			               />
			               <Skills
			                skill="Guitar"
			                progress={50}
			               />

			             <hr style={{borderTop: '1px solid', width: '85%'}}/>
						 <h6>Thank you for your time to read my resume!</h6>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;