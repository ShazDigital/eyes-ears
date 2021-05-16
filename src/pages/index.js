import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import styles from "../components/index.styles";
import "normalize.css";

const IndexPage = () => {
  return (
    <div css={styles}>
      <Container maxWidth="lg" className="upper-container">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <img className="logo" src={`images/eyes-ears.svg`} />
            <h1 className="hide">Eyes & Ears</h1>
            <img className="eyes-arrow" src={`images/eyes-ears-arrow.svg`} />
            <h2>
              An <span>experimental new concept </span> we are exploring that
              approaches the talent/recruiting game a bit differently
            </h2>
          </Grid>
        </Grid>
      </Container>
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
      <Container maxWidth="lg" className="footer">
        <div className="pulse-radar-imgs">
          <img src={`images/pulse.svg`} />
          <img src={`images/radar.svg`} />
        </div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <img
              className="footer-logo"
              src={`images/supply-footer-logo.svg`}
            />
          </Grid>
          <Grid item xs={12}>
            <img src={`images/star.svg`} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default IndexPage;
