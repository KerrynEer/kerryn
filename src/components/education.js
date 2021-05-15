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
    degreeArray.push(<li key={index}>{value}</li>)
  }

  for (const [index, value] of props.schoolDescriptionAwards.entries()) {
    awardsArray.push(<li key={index}>{value}</li>)
  }

  for (const [index, value] of props.schoolDescriptionLeadership.entries()) {
    leadershipArray.push(<li key={index}>{value}</li>)
  }

  for (const [index, value] of props.schoolDescriptionCommService.entries()) {
    commServiceArray.push(<li key={index}>{value}</li>)
  }

  return(
    <Grid className="education-details">
      <Cell col= {2}>
        <div className="resume-daterange">{props.startYear} - {props.endYear}</div>
      </Cell>
      <Cell col= {10}>
        <h4 className="resume-title">{props.schoolName}</h4>
        <div className="resume-details"><u>{props.schoolDegree}</u> {starsArray}</div>
        {degreeArray}
        <div className="resume-details"><u>{props.schoolAwards}</u> {starsArray}</div>
        {awardsArray}
        <div className="resume-details"><u>{props.schoolLeadership}</u></div>
        {leadershipArray}
        <div className="resume-details"><u>{props.schoolCommService}</u></div>
        {commServiceArray}
      </Cell>
    </Grid>
  );
}

export default Education;