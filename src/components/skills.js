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
        <Cell col={3}>
          <div>{this.props.skill}</div>
        </Cell>
        <Cell col={9}>
          <ProgressBar progress={this.props.progress} />
        </Cell>
      </Grid>
    )
  }
}

export default Skills;