import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {

  	//To display stars for more outstanding info
  	const starsArray = [];
  	if (this.props.important === 'TRUE') {
        starsArray.push(<b className="fa fa-star" aria-hidden="true"></b>)	
    }

  	return(
      <Grid className="experience-details">
        <Cell col= {2}>
          <h4 style= {{marginTop:'0px', fontFamily: "Patrick Hand Regular", fontSize: "22px"}}>{this.props.startYear} - {this.props.endYear}</h4>
        </Cell>
        <Cell col= {8}>
          <h4 style={{marginTop:'0px', fontFamily: "Patrick Hand Regular", fontSize: "26px"}}>{this.props.jobName} {starsArray}</h4>    
          <h4 style={{marginTop:'0px', fontFamily: "Patrick Hand Regular", fontSize: "20px"}}><i>{this.props.jobCompany}</i></h4>
          <h5 style= {{marginTop:'12px', fontFamily: "Patrick Hand Regular", fontSize: "20px"}}>{this.props.jobDescription}</h5>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;