import * as React from 'react'
import { useEffect, useRef } from 'react'
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
  const title = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(SplitText, MorphSVGPlugin, DrawSVGPlugin)
    let tl = gsap.timeline()
    const splitText = new SplitText(title.current, { linesClass: 'hello'})
    gsap.set(splitText.current, { perspective: 400 })
    tl.from(splitText.chars, {
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.01,
      duration: 0.4,
      delay: 1.5
    })
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
            <h2 className="main-title" ref={title}>
              An <span>experimental fresh approach </span> to keeping our trusted network aprised of who is free, who is looking, who is in need of help, and everything inbetween... All of course with a <span>curated human eye (and ear) </span> on top. The concept is still in a <span>brainstorm phase</span>, but we are getting some good feedback so far. Want to <span>join the convo</span>, as well as receive updates? Type some thoughts in here. 
            </h2>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className="img-container">
        <JobWord desktop={true} />
        <div className="img-right">
          <GetInTouch />
          <WhoWeAre />
          <JobWord />
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
