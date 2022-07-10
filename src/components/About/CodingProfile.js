import React from "react";
import { Row, Col } from "react-bootstrap";
import CountUp from 'react-countup';
import {AiFillStar } from "react-icons/ai";
import VisibilitySensor from 'react-visibility-sensor';


function CodingProfile() {
  return (
    <div>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code </strong>
      </h1>
      
    
    </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col  className="codinf-profile-icons">
              <h1><span className="purple">HACKERRANK</span>
              <p>
              <AiFillStar color="gold"/><AiFillStar color="gold" /><AiFillStar color="gold" /><AiFillStar color="gold"/><AiFillStar color="gold"/>
              </p>
              </h1>
            </Col>
            <Col className="codinf-profile-icons">
              <h1><span className="purple">LEETCODE</span>
              <p style={{fontSize : 24}}>
              Questions solved : <span className="purple">
                <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
        {({ isVisible }) => (
          <div style={{ height: 40 }}>
            {isVisible ? 
            <CountUp start={0}
  end={465} 
  duration={2.75} /> : null}
          </div>
        )}
      </VisibilitySensor></span>
              </p>
              </h1>
            </Col>
          </Row>
          </div>
  );
}

export default CodingProfile;
