import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import maher from "../../assets/img/profile/maher.jpeg";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <Container>
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={maher}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Maher Wardak</strong>
                <br /> I am a self-taught Full Stack Developer .
                <br />
                In 2019 I joined The Software Development Mastermind Program and
                learned everything from HTML, CSS, JavaScript, to building web
                application in React, Node.js, Express, PostgreSQL.
                <br />
                <br />
                Front-end is where I began but was quickly drawn into full-stack
                because I wanted to understand how an application is built in
                its entirety. Fast-forward to present day, I built several
                applications and have broadened my knowlege of web applications.
                <br />
                <br />
                The sense of fulfillment that I get when I solve a problem or
                create a new web app is unmatched and has propelled me to
                continue building. I hope to one day become a valuable
                contributor to a team that emphasizes teamwork, as well as
                individual growth.
                <br />
                <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/15imzlFogzUUZsPAvLq2OHPTH6lmMN-78/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/mwardak"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/maherwardak/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
