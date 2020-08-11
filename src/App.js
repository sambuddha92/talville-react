import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Candidate from './components/Candidate';
import Employer from './components/Employer'
import Footer from './components/Footer'
import FAQEmployer from './components/FAQEmployer';
import FAQCandidate from './components/FAQCandidate';
import Privacy from './components/Privacy'
import TnC from './components/TnC'
import ThankYouCandidate from './components/ThankYouCandidate';
import ThankYouEmployer from './components/ThankYouEmployer';
import FileTooLarge from './components/FileTooLarge';
//import JD from './components/JD'
import JobPage from './components/JobPage'

export default () => (
  <Fragment>
    <Header />
      <Router>
          <Switch>
            <Route exact path='/' component={Candidate} />
            <Route path='/employer' component={Employer} />
            <Route path='/faq-employer' component={FAQEmployer} />
            <Route path='/faq-candidate' component={FAQCandidate} />
            <Route path='/privacy' component={Privacy} />
            <Route path='/tnc' component={TnC} />
            <Route path='/thank-you-candidate' component={ThankYouCandidate} />
            <Route path='/thank-you-employer' component={ThankYouEmployer} />
            <Route path='/file-too-large' component={FileTooLarge} />
            <Route path='/:company/jobs/:id' component={JobPage} />
            {/*<Route path='/:company/jobs-2/:id' component={JobPage} />*/}
          </Switch>
      </Router>
    <Footer />
  </Fragment>
)