import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Education = (props) => {

  //To display stars for more outstanding info
  const starsArray = [];
  if (props.important === 'TRUE') {
    starsArray.push(<b className="fa fa-star" aria-hidden="true" key={starsArray.length}></b>)  
  }

  //To display school description array items in an unordered list
  const awardsArray = [];
  const leadershipArray = [];
  const degreeArray = [];
  const commServiceArray = [];

  for (const [index, value] of props.schoolDescriptionDegree.entries()) {
    degreeArray.push(<li style= {{marginTop:'4px'}} key={index}>{value}</li>)
  }

  for (const [index, value] of props.schoolDescriptionAwards.entries()) {
    awardsArray.push(<li style= {{marginTop:'4px'}} key={index}>{value}</li>)
  }

  for (const [index, value] of props.schoolDescriptionLeadership.entries()) {
    leadershipArray.push(<li style= {{marginTop:'4px'}} key={index}>{value}</li>)
  }

  for (const [index, value] of props.schoolDescriptionCommService.entries()) {
    commServiceArray.push(<li style= {{marginTop:'4px'}} key={index}>{value}</li>)
  }

  return(
    <Grid className="education-details">
      <Cell col= {2}>
        <h4 style= {{marginTop:'0px',fontFamily: "Patrick Hand Regular", fontSize: "21px"}}>{props.startYear} - {props.endYear}</h4>
      </Cell>
      <Cell col= {10}>
        <h4 style= {{marginTop:'0px', fontFamily: "Patrick Hand Regular", fontSize: "25px"}}>{props.schoolName}</h4>
        <h5 style= {{marginTop:'12px', fontFamily: "Patrick Hand Regular", fontSize: "19px"}}><u>{props.schoolDegree}</u> {starsArray}</h5>
        {degreeArray}
        <h5 style= {{marginTop:'12px', fontFamily: "Patrick Hand Regular", fontSize: "19px"}}><u>{props.schoolAwards}</u> {starsArray}</h5>
        {awardsArray}
        <h5 style= {{marginTop:'12px', fontFamily: "Patrick Hand Regular", fontSize: "19px"}}><u>{props.schoolLeadership}</u></h5>
        {leadershipArray}
        <h5 style= {{marginTop:'12px', fontFamily: "Patrick Hand Regular", fontSize: "19px"}}><u>{props.schoolCommService}</u></h5>
        {commServiceArray}
      </Cell>
    </Grid>
  );
}

export default Education;