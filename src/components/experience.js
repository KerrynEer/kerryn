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
        <h4 style= {{marginTop:'0px', fontFamily: "Patrick Hand Regular", fontSize: "21px"}}>{props.startYear} - {props.endYear}</h4>
      </Cell>
      <Cell col= {10}>
        <h4 style={{marginTop:'0px', fontFamily: "Patrick Hand Regular", fontSize: "25px"}}>{props.jobName} {starsArray}</h4>    
        <h4 style={{marginTop:'0px', fontFamily: "Patrick Hand Regular", fontSize: "19px"}}><i>{props.jobCompany}</i></h4>
        <h5 style= {{marginTop:'12px', fontFamily: "Patrick Hand Regular", fontSize: "19px"}}>{props.jobDescription}</h5>
      </Cell>
    </Grid>
  );
}

export default Experience;