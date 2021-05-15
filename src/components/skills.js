import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

const Skills = (props) => {

  //To display stars for more outstanding info
  const starsArray = [];
  if (props.important === 'TRUE') {
      starsArray.push(<b className="fa fa-star" aria-hidden="true"></b>)	
  }

  return(
    <Grid className="skills-details">
      <Cell col={3}>
        <div>{props.skill}</div>
      </Cell>
      <Cell col={9}>
        <ProgressBar progress={props.progress} />
      </Cell>
    </Grid>
  );
}

export default Skills;