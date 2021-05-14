import * as React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../components/index.styles";
import "normalize.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start"
  }
  // img: {
  //   width: 500,
  //   height: 450,
  // },
}));

const IndexPage = () => {
  const classes = useStyles();
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
          <img src={`images/jobNames.svg`} />
        </div>
        <div className="img-right">
          <img src={`images/getInTouch2.svg`} className="touch-img" />
          <img src={`images/whoWeAre.svg`} className="are-img" />
          <img src={`images/comingSoon.svg`} />
        </div>
      </Container>

      {/* <img src={`images/comingSoon.svg`} /> */}
      {/* <GridListTile>
            <img src={`images/pulse.svg`} />
          </GridListTile>
          <GridListTile>
            <img src={`images/radar.svg`} />
          </GridListTile> */}

      <img className="footer-logo" src={`images/supply-footer-logo.svg`} />
    </div>
  );
};

export default IndexPage;
