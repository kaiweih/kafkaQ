import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

import About from './About';
import Docs from './Docs';
import Home from './Home';
import QuickStart from './QuickStart';

import kafkaQlogoWithoutLetters from '../icons/kafkaQ-logo-no-letters.png';
import gmailLogo from '../icons/gmail-logo.png';
import twitterLogo from '../icons/twitter-logo.png';
import githubLogo from '../icons/github-logo.png';
import mediumLogo from '../icons/medium-logo.png';
import npmLogo from '../icons/npm-logo.png';

const menuBackgroundColor = '#2c2c34';
const dimWhite = '#d1d1d2';

const menuStyling = {
  backgroundColor: menuBackgroundColor,
  marginBottom: '0px',
};

const linkStyling = {
  color: dimWhite,
  fontSize: '11px',
};

class App extends Component<{}> {
  // This method generates a list of menu items to display on the top bar
  generateMenuItems() {
    const headings = ['Home', 'Quick Start', 'Documentation', 'Meet the Team'];
    // headings to add^ : demo, using our simulator

    return headings.map((heading, idx) => {
      // Grab the current heading, convert it to lower case, replace all spaces with "-",
      // and add a slash to the beginning
      const routeTo = '/' + heading.toLowerCase().replace(/ /g, '-');

      return (
        <Menu.Item active={false} link={true} key={`heading-${idx}`}>
          <Link to={routeTo} style={linkStyling}>
            {heading}
          </Link>
        </Menu.Item>
      );
    });
  }

  render(): JSX.Element {
    return (
      <Router>
        <div className="app">
          <Menu pointing style={menuStyling} className="menu">
            {this.generateMenuItems()}
          </Menu>
          <div className="content">
            <Switch>
              {/* / */}
              <Route exact={true} path="/">
                <Home />
              </Route>

              {/* /home */}
              <Route path="/home">
                <Home />
              </Route>

              {/* /quick-start */}
              <Route path="/quick-start">
                <QuickStart />
              </Route>

              {/* /documentation */}
              <Route path="/documentation">
                <Docs />
              </Route>

              {/* /meet-the-team */}
              <Route path="/meet-the-team">
                <About />
              </Route>
            </Switch>
          </div>

          {/* Footer */}
          <footer className="box-background">
            {/* kafkaQ info */}
            <div className="box-background footer-title">
              <img
                className="box-background"
                src={kafkaQlogoWithoutLetters}
                width="50"
                height="42"
              />
              <h3 className="box-background title">kafkaQ</h3>
            </div>

            <div className="logos">
              {/* GitHub repo */}
              <a
                className="box-background"
                href="https://github.com/oslabs-beta/kafkaQ"
              >
                <img
                  className="box-background"
                  src={githubLogo}
                  width="70"
                  height="49"
                />
              </a>

              {/* Gmail */}
              <a className="box-background" href="https://gmail.com/">
                <img
                  className="box-background"
                  src={gmailLogo}
                  width="40"
                  height="34"
                />
              </a>

              {/* Twitter */}
              <a
                className="box-background"
                id="twitter-logo"
                href="https://twitter.com/kafkaq21gmailc1"
              >
                <img
                  className="box-background"
                  src={twitterLogo}
                  width="40"
                  height="34"
                />
              </a>

              {/* Medium article */}
              <a
                className="box-background"
                id="medium-logo"
                href="https://www.medium.com"
              >
                <img
                  className="box-background"
                  src={mediumLogo}
                  width="67"
                  height="50"
                />
              </a>

              {/* NPM Package */}
              <a
                className="box-background"
                href="https://www.npmjs.com/package/kafkaq-monitor"
              >
                <img
                  className="box-background"
                  src={npmLogo}
                  width="73"
                  height="34"
                />
              </a>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
