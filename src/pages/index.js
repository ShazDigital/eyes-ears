import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import styles from "../components/index.styles";
import "normalize.css";

const IndexPage = () => {
  return (
    <div css={styles}>
      <img className="logo" src={`images/eyes-ears.svg`} />
      <h1>Eyes & Ears</h1>
      <h2>
        An <span>experimental new concept </span>that approaches the
        talent/recruiting game a bit differently
      </h2>
      <Container maxWidth="lg" className="img-container">
        <div className="img-left">
          <img src={`images/jobnames.png`} />
        </div>
        <div className="img-right">
          <div className="touch-img">
            <img src={`images/getInTouchPng.png`} />
          </div>
          <div className="are-img">
            <img src={`images/wearepng.png`} />
          </div>
          <img src={`images/soon.png`} className="soon-img" />
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className="pulse-radar-imgs">
          <img src={`images/pulse.svg`} />
          <img src={`images/radar.svg`} />
        </div>
      </Container>

      <img className="footer-logo" src={`images/supply-footer-logo.svg`} />
    </div>
  );
};

export default IndexPage;
