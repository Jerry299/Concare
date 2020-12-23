import React from "react";
import { Row, Col } from "antd";
import "./Hero.css";

import CarSvg from "../../images/carSvg.svg";

// image link = https://nigeriantech.com.ng/wp-content/uploads/2020/04/Spotting-a-Good-Mechanic-in-Nigeria-Nigeriantech.com_.ng_.jpg

const Hero = () => {
  return (
    <div>
      <div className="color-container">
        <div className="color1"></div>
        <div className="color2"></div>
      </div>

      <Row className="hero-wrapper">
        <Col className="hero-header">
          <div>
            <p className="header-one">Shey Mechanic don turn you to maga?</p>
            <p className="header-two">
              Shey everyday na new story of car breakdown because of trial and
              error and fake spare parts?
            </p>
            <p className="header-three">
              Or you want book a special session with a professional mechanic?
            </p>
            <p className="header-four">
              Or want a reminder about your next car servicing?
            </p>
            <p className="header-five">Oya Calm Down,Yes be Calming Down</p>
          </div>
        </Col>
        <Col className="hero-photos">
          <div>
            <img src={CarSvg} className="hero-img" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
