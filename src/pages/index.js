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
          <img src={`images/jobs-no-word.svg`} />
        </div>
        <div className="img-right">
          <div className="touch-img">
            <p className="text-in-img touch-text">Get in touch</p>
            <img src={`images/star_box.png`} />
          </div>
          <div className="are-img">
            <p className="text-in-img are-text">Who we are</p>
            <img src={`images/weare-noword.svg`} />
          </div>
          <div className="soon-img">
            <p className="bogue-text">Coming Soon</p>
            <img src={`images/soon-no-word.svg`} />
          </div>
        </div>
      </Container>
      <Container maxWidth="lg" className="footer">
        <div className="pulse-radar-imgs">
          <div className="pulse-img">
            <p className="bogue-text">A finger on the pulse</p>
            <img src={`images/orange.svg`} />
          </div>
          <div className="purple-img-container">
            <p className="purple-text text-in-img">
              An <span className="radar">under-the-radar</span> idea brought to
              you by
            </p>
            <img src={`images/purple.svg`} />
          </div>
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
