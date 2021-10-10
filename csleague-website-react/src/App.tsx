import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Officers from "./pages/Officers";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import JoinUs from "./pages/JoinUs";

export default function App() {
  return (
    <Router>
      <Container className="navbar-outer-container">
      <Navbar expand="md">
        <Container className="navbar-container">
          <Navbar.Brand href="/">CS League</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link href="/officers">Officers</Nav.Link>
              <Nav.Link href="/contact-us">Contact</Nav.Link>
              <Nav.Link href="/join-us" className="join-us-btn">Join</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      </Container>
     
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/join-us">
          <JoinUs />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/officers">
          <Officers />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
