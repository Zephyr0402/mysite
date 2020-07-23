import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Updating from './components/Updating'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route exact path="/">
              <div className="App">
                <Header resumeData={resumeData} />
                <About resumeData={resumeData} />
                <Resume resumeData={resumeData} />
                <Portfolio resumeData={resumeData} />
                <Testimonials resumeData={resumeData} />
                <ContactUs resumeData={resumeData} />
                <Footer resumeData={resumeData} />
              </div>
            </Route>
            
            <Route path="/updating">
              <Updating />
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;