import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

//const logo = (process.env.PUBLIC_URL + '/images/logo.png');

export default () => (
    <Navbar bg="white" expand="md" fixed="top" >
        <Navbar.Brand href="/"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='talville' className='logo-header' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Router>
                    <Switch>
                        <Route exact path='/'><Nav.Link href="/faq-candidate" >FAQs</Nav.Link></Route>
                        <Route exact path='/employer'><Nav.Link href="/faq-employer" >FAQs</Nav.Link></Route>
                        <Route exact path='/faq-employer'><Nav.Link href="/" >FOR CANDIDATES</Nav.Link></Route>
                        <Route exact path='/faq-candidate'><Nav.Link href="/" >FOR CANDIDATES</Nav.Link></Route>
                        <Route path='/:company/jobs/:id'><Nav.Link href="/faq-candidate" >FAQs</Nav.Link></Route>
                    </Switch>
                </Router>
                <Router>
                    <Switch>
                        <Route exact path='/'><Nav.Link href="/employer" >FOR EMPLOYERS</Nav.Link></Route>
                        <Route exact path='/employer'><Nav.Link href="/" >FOR CANDIDATES</Nav.Link></Route>
                        <Route exact path='/faq-employer'><Nav.Link href="/employer" >FOR EMPLOYERS</Nav.Link></Route>
                        <Route exact path='/faq-candidate'><Nav.Link href="/employer" >FOR EMPLOYERS</Nav.Link></Route>
                        <Route path='/:company/jobs/:id'><Nav.Link href="/" >FOR CANDIDATES</Nav.Link></Route>
                    </Switch>
                </Router>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)