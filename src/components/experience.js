import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Experience = (props) => {

  //To display stars for more outstanding info
  const starsArray = [];
  if (props.important === 'TRUE') {
    starsArray.push(<b className="fa fa-star" aria-hidden="true" key={starsArray.length}></b>)	
  }

  return(
    <Grid className="experience-details">
      <Cell col= {2}>
        <div className="resume-daterange">{props.startYear} - {props.endYear}</div>
      </Cell>
      <Cell col= {10}>
        <h4 className="resume-title">{props.jobName} {starsArray}</h4>    
        <div className="resume-subtitle"><i>{props.jobCompany}</i></div>
        <div className="resume-details">{props.jobDescription}</div>
      </Cell>
    </Grid>
  );
}

export default Experience;