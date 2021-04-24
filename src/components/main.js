import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
    </HashRouter>
)

export default Main;