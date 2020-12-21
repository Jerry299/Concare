import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

import "./Header.css";

import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// https://hellloexpert.com/tf/html/motonic/assets/images/slider/hero.png

const Header = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-brand">MEKALIC</div>
        <div>
          <FontAwesomeIcon icon={faAlignRight} className="icon" size="2x" />
        </div>
      </div>
    </div>
  );
};

export default Header;
