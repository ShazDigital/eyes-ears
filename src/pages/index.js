import * as React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../components/index.styles";
import "normalize.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: "20px",
    textAlign: "center"
  }
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
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <img src={`images/jobNames.svg`} />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <img src={`images/getInTouch.svg`} />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <img src={`images/whoWeAre.svg`} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <img src={`images/comingSoon.svg`} />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <img src={`images/comingSoon.svg`} />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
        {/* <Grid container>
          <Grid item xs={12} md={4}>
            <img src={`images/jobNames.svg`} />
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={`images/getInTouch.svg`} />
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={`images/whoWeAre.svg`} />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={`images/comingSoon.svg`} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <img src={`images/pulse.svg`} />
          </Grid>
          <Grid item xs={12}>
            <img src={`images/radar.svg`} />
          </Grid>
        </Grid> */}
      </div>
      <img className="footer-logo" src={`images/supply-footer-logo.svg`} />
    </div>
  );
};

export default IndexPage;
