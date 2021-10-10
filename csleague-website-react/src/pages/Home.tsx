import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

enum CSLeagueEventType {
  Webinar = "webinar",
  Workshop = "workshop",
  CodingCompetition = "coding-competition",
  Hackathon = "hackathon",
}

class CSLeagueEventDescription {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}

const Home = () => {
  const [show, setShow] = useState(false);
  const [eventDescription, setEventDescription] =
    useState<CSLeagueEventDescription>();

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    const buttonName = e.target.parentElement.name;
    if (buttonName == CSLeagueEventType.Webinar) {
      setEventDescription(
        new CSLeagueEventDescription("Webinars", "Webinars are so cool!")
      );
    } else if (buttonName == CSLeagueEventType.Workshop) {
      setEventDescription(
        new CSLeagueEventDescription("Workshops", "Workshops are so cool!")
      );
    } else if (buttonName == CSLeagueEventType.CodingCompetition) {
      setEventDescription(
        new CSLeagueEventDescription(
          "Coding Competition",
          "Coding Competitions are so cool!"
        )
      );
    } else {
      setEventDescription(
        new CSLeagueEventDescription("Hackathons", "Hackathons are so cool!")
      );
    }
    setShow(true);
  };

  return (
    <>
      <main>
        <Container>
          <h1 className="section-header">Elk Grove Computer Science League</h1>
          <Row>
            <Col className="glass text">
              <p>
                <strong>26 Events</strong> Hosted
              </p>
            </Col>
            <Col className="glass text">
              <p>
                <strong>60+</strong> Members
              </p>
            </Col>
            <Col className="glass text">
              <p>
                <strong>9</strong> Schools across EGUSD
              </p>
            </Col>
          </Row>
        </Container>
      </main>

      <main>
        <Container>
          <Row>
            <Col className="glass text">
              <div className="header">
                <button onClick={handleShow} name={CSLeagueEventType.Webinar}>
                  <i className="fas fa-info-circle"></i>
                </button>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
              >
                <path d="M13.5 8c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-8zm6 1.854v4.293l-2-1.408v-1.478l2-1.407zm2-3.854l-6 4.223v3.554l6 4.223v-12z" />
              </svg>
              <h2>Webinars</h2>
            </Col>
            <Col className="glass text">
              <div className="header">
                <button onClick={handleShow} name={CSLeagueEventType.Workshop}>
                  <i className="fas fa-info-circle"></i>
                </button>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
              >
                <path d="M20.753 23c-.868 0-1.684-.338-2.297-.951l-10.602-11.174-.607.652-1.929 1.93-5.318-5.32 2.51-2.511.683.459c.026.015.171.086.304.086.054 0 .12-.008.215-.104.195-.195.312-.471.475-.854.323-.759.765-1.801 2.174-2.861 1.19-.897 2.66-1.352 4.367-1.352 2.713 0 5.107 1.163 5.208 1.212l-.341 1.891c-1.658.166-4.558.762-3.318 2.007l10.786 11.358c.6.602.937 1.417.937 2.284s-.337 1.683-.951 2.296c-.614.614-1.429.952-2.296.952zm-9.341-11.368l8.47 9.017c.444.443 1.28.458 1.753-.013.235-.236.366-.55.366-.883 0-.333-.13-.647-.367-.884l-8.457-9.002-1.765 1.765zm-8.585-3.495l2.492 2.493.021-.022c-.138-.558-.058-1.225.524-1.806.346-.346.777-.529 1.25-.529.651 0 1.307.34 2.004 1.039l.893.893 1.766-1.767-.915-.915c-1.171-1.172-1.027-2.24-.838-2.772.246-.689.807-1.258 1.661-1.695-.312-.036-.633-.057-.958-.057-1.264 0-2.329.319-3.165.949-.98.738-1.25 1.374-1.537 2.047-.212.5-.431 1.016-.901 1.485-.45.452-1.013.69-1.627.69-.227 0-.437-.032-.623-.08l-.047.047zm13.553-.619l3.336-3.296c.169-.17.443-.168.611 0 .169.17.169.442.001.611l-3.353 3.313.866.912 3.375-3.335c.168-.169.441-.168.611.001.168.168.169.441 0 .609l-3.392 3.352 1.011 1.064 3.679-3.637c.584-.582.875-1.346.875-2.11 0-.768-.293-1.537-.88-2.125-.585-.585-1.35-.877-2.114-.877-.766 0-1.53.293-2.114.877l-3.569 3.528 1.057 1.113zm-7.233 7.65l-4.127 3.993c-.229.229-.503.407-.79.558l-.58.302-1.025 2.146.833.833 2.101-1.07.301-.58c.151-.286.347-.545.574-.774l4.091-3.958-1.378-1.45z" />
              </svg>
              <h2>Workshops</h2>
            </Col>
          </Row>
          <Row>
            <Col className="glass text">
              <div className="header">
                <button
                  onClick={handleShow}
                  name={CSLeagueEventType.CodingCompetition}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
              >
                <path d="M20.753 23c-.868 0-1.684-.338-2.297-.951l-10.602-11.174-.607.652-1.929 1.93-5.318-5.32 2.51-2.511.683.459c.026.015.171.086.304.086.054 0 .12-.008.215-.104.195-.195.312-.471.475-.854.323-.759.765-1.801 2.174-2.861 1.19-.897 2.66-1.352 4.367-1.352 2.713 0 5.107 1.163 5.208 1.212l-.341 1.891c-1.658.166-4.558.762-3.318 2.007l10.786 11.358c.6.602.937 1.417.937 2.284s-.337 1.683-.951 2.296c-.614.614-1.429.952-2.296.952zm-9.341-11.368l8.47 9.017c.444.443 1.28.458 1.753-.013.235-.236.366-.55.366-.883 0-.333-.13-.647-.367-.884l-8.457-9.002-1.765 1.765zm-8.585-3.495l2.492 2.493.021-.022c-.138-.558-.058-1.225.524-1.806.346-.346.777-.529 1.25-.529.651 0 1.307.34 2.004 1.039l.893.893 1.766-1.767-.915-.915c-1.171-1.172-1.027-2.24-.838-2.772.246-.689.807-1.258 1.661-1.695-.312-.036-.633-.057-.958-.057-1.264 0-2.329.319-3.165.949-.98.738-1.25 1.374-1.537 2.047-.212.5-.431 1.016-.901 1.485-.45.452-1.013.69-1.627.69-.227 0-.437-.032-.623-.08l-.047.047zm13.553-.619l3.336-3.296c.169-.17.443-.168.611 0 .169.17.169.442.001.611l-3.353 3.313.866.912 3.375-3.335c.168-.169.441-.168.611.001.168.168.169.441 0 .609l-3.392 3.352 1.011 1.064 3.679-3.637c.584-.582.875-1.346.875-2.11 0-.768-.293-1.537-.88-2.125-.585-.585-1.35-.877-2.114-.877-.766 0-1.53.293-2.114.877l-3.569 3.528 1.057 1.113zm-7.233 7.65l-4.127 3.993c-.229.229-.503.407-.79.558l-.58.302-1.025 2.146.833.833 2.101-1.07.301-.58c.151-.286.347-.545.574-.774l4.091-3.958-1.378-1.45z" />
              </svg>
              <h2>Coding Competitions</h2>
            </Col>
            <Col className="glass text">
              <div className="header">
                <button onClick={handleShow} name={CSLeagueEventType.Hackathon}>
                  <i className="fas fa-info-circle"></i>
                </button>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
              >
                <path d="M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z" />
              </svg>
              <h2>Hackathons</h2>
            </Col>
          </Row>
        </Container>
      </main>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>{eventDescription?.name}</Modal.Title>
          <button onClick={handleClose}><i className="fas fa-times-circle"></i></button>
        </Modal.Header>
        <Modal.Body>{eventDescription?.description}</Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
