import React from 'react';
import { Grid, Cell } from 'react-mdl';

const LandingPage = () => {
  return(
    <div className="background">
      <Grid className="landing-grid">
        <Cell col={12}>
        <h1>Kerryn</h1>
        <br />

        <div className="banner-text"> 
          <h2>Hi! I am a final year Computer Science Undergraduate at National University of Singapore and welcome to my personal website.</h2>
          <br />
          <hr/>
          <br></br>
  
          <div className="links-to-pages">

            <a href={process.env.PUBLIC_URL + "/#/resume"}>
              <i className="fa fa-file-text" aria-hidden="true"></i>
              <p>Resume</p>
            </a>

            <a href={process.env.PUBLIC_URL + "/#/projects"}>
              <i className="fa fa-laptop" aria-hidden="true"></i>
              <p>Projects</p>
            </a>

            <a href={process.env.PUBLIC_URL + "/#/contact"}>
              <i className="fa fa-phone" aria-hidden="true"></i>
              <p>Contact</p>
            </a>
          </div>
        </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default LandingPage;
