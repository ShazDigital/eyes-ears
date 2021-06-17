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

const IndexPage = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText)
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
        <div className="img-left">
          <img alt="" src={`images/jobs-no-word.svg`} />
          <p className="job-word cd">Creative Directors</p>
          <p className="job-word des">Designers</p>
          <p className="job-word pr">Producers</p>
          <p className="job-word dev">Developers</p>
          <p className="job-word ux">User Experience</p>
        </div>
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
          <div className="purple-img-container">
            <div className="purple-text">
              <p className="text-in-img">
                An <span className="radar">under-the-radar</span> idea brought
                to you by
              </p>
              {/* <img alt="" className="arrow" src={`images/arrow-down.png`} /> */}
            </div>
            <img alt="" src={`images/purple.svg`} />
          </div>
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
