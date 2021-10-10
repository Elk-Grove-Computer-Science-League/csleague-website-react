import React from "react";

const About = () => {
  return (
    <>
      <main>
        <h1 className="section-header">
          <strong>Who We Are</strong>
        </h1>

        <div className="glass">
          <h2 className="text">
            Our mission is to nuture, promote, and serve to form a profound,
            sustainable, and thriving community around computer science.
          </h2>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </main>

      <main>
        <h1 className="section-header">
          <strong>About Us</strong>
        </h1>
        <div className="glass flex-column">
          <h4>
            We are a student-led computer science community group in Elk Grove where throughout the year we host webinars, workshops, coding competitions, and hackathons
            for students regardless of experience and skill levels. 
          </h4>

          <h4>
            Events are hosted on Zoom after school and are led by student presenters. We go through
            hands-on projects and activities, with different events covering topics ranging from website development, Python, and game development.
          </h4>

          <h4>
            An awesome aspect of this approach is that students get to chose which events they are interested in, giving them the flexibility and choice of what CS topicsthey woud like to 
            explore. 
          </h4>
        </div>
      </main>
    </>
  );
};

export default About;
