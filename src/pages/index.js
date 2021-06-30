import * as React from 'react'
import { useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import styles from '../components/index.styles'
import 'normalize.css'
import ComingSoon from '../components/ComingSoon/ComingSoon'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { MorphSVGPlugin } from 'gsap/all'
import JobWord from '../components/JobWord/JobWord'
import Radar from '../components/Radar/Radar.js'

const IndexPage = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText, MorphSVGPlugin)
  }, [])
  return (
    <div css={styles}>
      <Container maxWidth="lg" className="upper-container">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <img alt="" className="logo" src={`images/eyes-ears.svg`} />
            <h1 className="eyes-header">Eyes &amp; Ears</h1>
            <img alt="" className="eyes-arrow" src={`images/arrow-down.png`} />
            <h2>
              An <span>experimental new concept </span> we are exploring that
              approaches the talent/recruiting game a bit differently
            </h2>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className="img-container">
        <JobWord />
        <div className="img-right">
          <GetInTouch />
          <WhoWeAre />
          <ComingSoon />
        </div>
      </Container>
      <Container maxWidth="lg" className="footer">
        <div className="pulse-radar-imgs">
          <div className="pulse-img">
            <p className="bogue-text">A finger on the pulse</p>
            <img alt="" src={`images/orange.svg`} />
          </div>
          <Radar />
        </div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <a href="thesupply.com" rel="noopener">
              <img
                alt=""
                className="footer-logo"
                src={`images/supply-footer-logo.svg`}
              />
            </a>
          </Grid>
          <Grid item xs={12}>
            <img alt="" src={`images/star.svg`} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default IndexPage
