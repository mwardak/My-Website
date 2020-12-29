import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -200px;
  text-align: center;

  strong {
    font-size: 1.7em;
    font-family:'Roboto', serif; font-weight: bold; 
  }
  div {
    color: #2348ff;

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: bold;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          
          <br />
          <span>
            <strong>Maher Wardak</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Full Stack Developer","Ready To Join Your Team"],
              autoStart: true,
              loop: true,
              delay: 60
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
