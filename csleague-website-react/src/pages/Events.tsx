import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

interface SidebarEventCategoryProps {
  categoryName: string;
  categoryEvents: CSLeagueEvent[];
}

interface SidebarEventProps {
  eventName: string;
}

interface MainEventCategoryProps {
  events: CSLeagueEvent[];
  categoryName: string;
}

interface EventProps {
  event: CSLeagueEvent;
}

enum EventDifficulty {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

class CSLeagueEvent {
  eventName: string;
  eventDate: Date;
  eventDifficulty: EventDifficulty;
  eventDescription: string;
  hosts: string[];

  constructor(
    eventName: string,
    eventDate: Date,
    eventDifficulty: EventDifficulty,
    eventDescription: string,
    hosts: string[]
  ) {
    this.eventName = eventName;
    this.eventDate = eventDate;
    this.eventDifficulty = eventDifficulty;
    this.eventDescription = eventDescription;
    this.hosts = hosts;
  }

  toString() {
    return this.eventName;
  }
}

const csLeagueEventConverter = {
  toFirestore: (event) => {
    return {
      eventName: event.eventName,
      eventDate: new Date(event.eventDate.toDate()),
      eventDifficulty: event.eventDifficulty,
      eventDescription: event.eventDescription,
      hosts: event.hosts
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new CSLeagueEvent(
        data.eventName,
        new Date(data.eventDate.toDate()),
        data.eventDifficulty,
        data.eventDescription,
        data.hosts
    );
  },
};

const Events = () => {
  const [todayEvents, setTodayEvents] = useState<CSLeagueEvent[]>([]);
  const [priorEvents, setPriorEvents] = useState<CSLeagueEvent[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<CSLeagueEvent[]>([]);

  useEffect(() => {
    fetchEventsFromFirestore();
  }, []);

  async function fetchEventsFromFirestore() {
    var fetchedTodayEvents: CSLeagueEvent[] = [];
    var fetchedUpcomingEvents: CSLeagueEvent[] = [];
    var fetchedPriorEvents: CSLeagueEvent[] = [];

    const querySnapshot = await getDocs(
      collection(db, "events").withConverter(csLeagueEventConverter)
    );
    querySnapshot.forEach((eventDoc) => {
        //upcoming events
        const eventDocData = eventDoc.data();
        if (eventDocData.eventDate > new Date()) {
            fetchedUpcomingEvents.push(eventDoc.data());
        } else if (eventDocData.eventDate < new Date()) {
            fetchedPriorEvents.push(eventDoc.data());
        } else {
            fetchedTodayEvents.push(eventDoc.data());
        }
        console.log(eventDoc.id, " => ", eventDocData);
    });
    setTodayEvents(fetchedTodayEvents);
    setUpcomingEvents(fetchedUpcomingEvents);
    setPriorEvents(fetchedPriorEvents);
  }

  return (
    <Container className="sidebar-container">
      <Row>
        <Col md={6} className="sidebar-col">
          <div className="sidebar">
            <SidebarEventCategory categoryName={"Today"} categoryEvents={todayEvents}/>
            <SidebarEventCategory categoryName={"Upcoming"} categoryEvents={upcomingEvents}/>
            <SidebarEventCategory categoryName={"Prior"} categoryEvents={priorEvents}/>
          </div>
        </Col>
        <Col md={6} className="events">
          <MainEventCategory categoryName={"Today"} events={todayEvents} />
          <hr/>
          <MainEventCategory categoryName={"Upcoming Events"} events={upcomingEvents} />
          <hr/>
          <MainEventCategory categoryName={"Prior Events"} events={priorEvents} />
        </Col>
      </Row>
    </Container>
  );
};

const SidebarEventCategory: React.FC<SidebarEventCategoryProps> = ({
  categoryName,
  categoryEvents
}) => {
  return (
    <>
      <a href={`#${categoryName}`} className="sidebar-event-category">
        <h4>
          <strong>{categoryName}</strong>
        </h4>
      </a>

      <div className="today-events-sidebar">
        {categoryEvents.map((event: CSLeagueEvent, index: number) => (
          <SidebarEvent eventName={event.eventName} key={index}/>
        ))}
      </div>
    </>
  );
};

const SidebarEvent: React.FC<SidebarEventProps> = ({ eventName }) => {
  return (
    <a href={`#${eventName}`} className="sidebar-event">
      <h6>{eventName}</h6>
    </a>
  );
};

const MainEventCategory: React.FC<MainEventCategoryProps> = ({ events, categoryName }) => {
  return (
    <div className="main-event-category">
      <h2 className="event-category" id={`${categoryName}`}>
        {categoryName}
      </h2>
      {events.length != 0 ? events.map((event: CSLeagueEvent, index: number) => (
        <Event event={event} key={index}/>
      )) : <h5>No Events</h5>}
    </div>
  );
};

const Event: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="event" id={`${event.eventName}`}>
      <h3 className="event-title">{event.eventName ?? "N/A"}</h3>
      <h4>{event.eventDate.toLocaleDateString("en-US") ?? "N/A"}</h4>
      <h6 className="intermediate">{event.eventDifficulty ?? "N/A"}</h6>
      <div className="event-hosts">
        {event.hosts.map((hostName: string) => (
          <div className="event-host">
            <h6 className="event-host-name">{hostName}</h6>
          </div>
        ))}
      </div>
      <p>{event.eventDescription ?? "N/A"}</p>
    </div>
  );
};

export default Events;
