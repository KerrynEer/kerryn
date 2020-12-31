import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {

    //To display stars for more outstanding info
    const starsArray = [];
    if (this.props.important === 'TRUE') {
        starsArray.push(<b className="fa fa-star" aria-hidden="true" key={starsArray.length}></b>)  
    }

    //To display school description array items in an unordered list
    const awardsArray = [];
    const leadershipArray = [];
    const degreeArray = [];
    const commServiceArray = [];

    for (const [index, value] of this.props.schoolDescriptionDegree.entries()) {
      degreeArray.push(<li style= {{marginTop:'4px'}} key={index}>{value}</li>)
    }

    for (const [index, value] of this.props.schoolDescriptionAwards.entries()) {
      awardsArray.push(<li style= {{marginTop:'4px'}} key={index}>{value}</li>)
    }

    for (const [index, value] of this.props.schoolDescriptionLeadership.entries()) {
      leadershipArray.push(<li style= {{marginTop:'4px'}} key={index}>{value}</li>)
    }

    for (const [index, value] of this.props.schoolDescriptionCommService.entries()) {
      commServiceArray.push(<li style= {{marginTop:'4px'}} key={index}>{value}</li>)
    }

    return(
      <Grid className="education-details">
        <Cell col= {2}>
          <h4 style= {{marginTop:'0px',fontFamily: "Patrick Hand Regular", fontSize: "21px"}}>{this.props.startYear} - {this.props.endYear}</h4>
        </Cell>
        <Cell col= {8}>
          <h4 style= {{marginTop:'0px', fontFamily: "Patrick Hand Regular", fontSize: "25px"}}>{this.props.schoolName}</h4>
          <h5 style= {{marginTop:'12px', fontFamily: "Patrick Hand Regular", fontSize: "19px"}}><u>{this.props.schoolDegree}</u> {starsArray}</h5>
          {degreeArray}
          <h5 style= {{marginTop:'12px', fontFamily: "Patrick Hand Regular", fontSize: "19px"}}><u>{this.props.schoolAwards}</u> {starsArray}</h5>
          {awardsArray}
          <h5 style= {{marginTop:'12px', fontFamily: "Patrick Hand Regular", fontSize: "19px"}}><u>{this.props.schoolLeadership}</u></h5>
          {leadershipArray}
          <h5 style= {{marginTop:'12px', fontFamily: "Patrick Hand Regular", fontSize: "19px"}}><u>{this.props.schoolCommService}</u></h5>
          {commServiceArray}

        </Cell>
      </Grid>
    )
  }
}

export default Education;