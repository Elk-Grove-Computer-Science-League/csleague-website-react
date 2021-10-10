import React from "react";
import { Col, Row } from "react-bootstrap";

const JoinUs = () => {
    return (
        <main>
        <h1 className="title"><strong>Join Via These 3 Steps:</strong></h1>
        <Row className="glass join-us-step">
          <Col xs={6} md={3}>
            <h3 className="step-text"><strong>Step 1:</strong></h3>
          </Col>
          <Col xs={6} md={9}>
            <h5 className="step-content">
              Fill Out
              <a
                className="link-button"
                href="https://forms.gle/GCuHEhjoebYqjeSt6?ltclid="
                target="_blank"
                rel="noopener noreferrer"
                >Google Form</a
              >!
            </h5>
          </Col>
        </Row>
  
        <Row className="glass join-us-step">
          <Col xs={6} md={3}>
            <h3 className="step-text"><strong>Step 2:</strong></h3>
          </Col>
          <Col xs={6} md={9}>
            <h5 className="step-content">
              Join our Discord Server here!:
              <div>
                <a
                  className="link-button"
                  href="https://discord.gg/XzFYURFcXE"
                  target="_blank"
                  rel="noopener noreferrer"
                  >CS League Discord Server</a
                >
              </div>
            </h5>
          </Col>
        </Row>
  
        <Row className="glass join-us-step">
          <Col xs={6} md={3}>
            <h3 className="step-text"><strong>Step 3:</strong></h3>
          </Col>
          <Col xs={6} md={9}>
            <h5 className="step-content">
              Please refer to the
              <a className="link-button" href="/events">Events</a> Page for
              upcoming events!
            </h5>
          </Col>
        </Row>
      </main>
    );
}

export default JoinUs;