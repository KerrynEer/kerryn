import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {

  	//To display stars for more outstanding info
  	const starsArray = [];
  	if (this.props.important === 'TRUE') {
        starsArray.push(<b className="fa fa-star" aria-hidden="true"></b>)	
    }

  	return(
      <Grid className="skills-details">
        <Cell col={12}>
          <div>
             <div style={{width:'15%'}}>{this.props.skill}</div>
            <ProgressBar style={{margin: 'auto', width: '65%'}} progress={this.props.progress} /> 
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;