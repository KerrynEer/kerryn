import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';

const App = () => {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header transparent className="header-color" title={<span style={{fontFamily: 'Patrick Hand Regular', fontSize: "18px"}}>Kerryn Eer</span>} scroll >
          <Navigation>
              <a href={process.env.PUBLIC_URL + "/#/"}>About Me</a>
              <a href={process.env.PUBLIC_URL + "/#/resume"}>Resume</a>
              <a href={process.env.PUBLIC_URL + "/#/projects"}>Projects</a>
              <a href={process.env.PUBLIC_URL + "/#/contact"}>Contact</a>
          </Navigation>
        </Header>
        <Drawer className="drawer">
          <Navigation>
              <a href={process.env.PUBLIC_URL + "/#/"}><i className="fa fa-user" aria-hidden="true"></i>About Me</a>
              <a href={process.env.PUBLIC_URL + "/#/resume"}><i className="fa fa-file-text" aria-hidden="true"></i>Resume</a>
              <a href={process.env.PUBLIC_URL + "/#/projects"}><i className="fa fa-laptop" aria-hidden="true"></i>Projects</a>
              <a href={process.env.PUBLIC_URL + "/#/contact"}><i className="fa fa-phone" aria-hidden="true"></i>Contact</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
