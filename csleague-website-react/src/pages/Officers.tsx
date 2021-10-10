import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profile from "../assets/profile.jpg";

const Officers = () => {
  return (
    <>
      <main>
        <h1 className="title">
          <strong>Officer Team</strong>
        </h1>
        <Container>
          <Row>
            <Col lg={3} className="officer">
              <img
                className="officer-pic"
                src={profile}
                alt="Justin Wong President"
              />
              <div className="officer-description">
                <h5>Justin Wong</h5>
                <h6>President</h6>
              </div>
            </Col>
            <Col lg={3} className="officer">
              <img
                className="officer-pic"
                src={profile}
                alt="Officer Image"
              />
              <div className="officer-description">
                <h5>Jess Luu</h5>
                <h6>Vice President</h6>
              </div>
            </Col>
            <Col lg={3} className="officer">
              <img
                className="officer-pic"
                src={profile}
                alt="Officer Image"
              />
              <div className="officer-description">
                <h5>Matthew Leung</h5>
                <h6>Treasurer</h6>
              </div>
            </Col>
            <Col lg={3} className="officer">
              <img
                className="officer-pic"
                src={profile}
                alt="Officer Image"
              />
              <div className="officer-description">
                <h5>Ashton Simbol</h5>
                <h6>Teaching Coordinator</h6>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4} className="officer">
              <img
                className="officer-pic"
                src={profile}
                alt="Officer Image"
              />
              <div className="officer-description">
                <h5>Arya Gill</h5>
                <h6>Competition Coordinator</h6>
              </div>
            </Col>
            <Col lg={4} className="officer">
              <img
                className="officer-pic"
                src={profile}
                alt="Officer Image"
              />
              <div className="officer-description">
                <h5>James Parish</h5>
                <h6>Secretary</h6>
              </div>
            </Col>
            <Col lg={4} className="officer">
              <img
                className="officer-pic"
                src={profile}
                alt="Officer Image"
              />
              <div className="officer-description">
                <h5>John Williamson</h5>
                <h6>Outreach Director</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Officers;
