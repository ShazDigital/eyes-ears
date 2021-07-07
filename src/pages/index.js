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
import { MorphSVGPlugin, DrawSVGPlugin } from 'gsap/all'
import JobWord from '../components/JobWord/JobWord'
import Radar from '../components/Radar/Radar.js'
import Guitar from '../components/Guitar/Guitar'
import Logo from '../components/Logo/Logo'
import TheSupplyLogo from '../components/TheSupplyLogo/TheSupplyLogo'
import IntroScreen from '../components/IntroScreen/IntroScreen'

const IndexPage = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText, MorphSVGPlugin, DrawSVGPlugin)
  }, [])
  return (
    <div css={styles}>
      <IntroScreen />
      <Container maxWidth="lg" className="upper-container">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Logo auto={false} />
            <h1 className="eyes-header">Eyes &amp; Ears</h1>
            <img
              alt=""
              className="eyes-arrow bounce"
              src={`images/arrow-down.png`}
            />
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
        {/* <Guitar /> */}
        <Radar />
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <a href="thesupply.com" rel="noopener">
              <TheSupplyLogo />
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
