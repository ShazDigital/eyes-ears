import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const StyledP = styled.p`
  z-index: 10;
  position: relative;
`

const GetInTouch = () => {
  const [active, setActive] = useState(false)
  const [tween, setTween] = useState(null)
  const pathRef = useRef(null)

  useEffect(() => {
    const anim = gsap.to(pathRef.current, {
      duration: 5,
      repeat: -1,
      rotation: '+=360_cw',
      translateX: '-50%',
      translateY: '-50%',
      transformOrigin: '50% 50%',
      ease: 'linear',
    })
    setTween(anim)
  }, [])

  useEffect(() => {
    if (!tween) return
    if (active) {
      tween.timeScale(1)
      tween.play()
    } else {
      tween.timeScale(0.15)
    }
  }, [active, tween])

  return (
    <div
      role="button"
      className="touch-img"
      tabIndex={0}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <StyledP className="text-in-img touch-text">Get in touch</StyledP>
      <StyledSVG
        width="95%"
        height="95%"
        viewBox="0 0 361 362"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={pathRef}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <path
          d="M85.1916 27.39L153.82 72.1901L155.794 73.479L157.199 71.6064L206.195 6.29463L229.647 84.2229L230.327 86.483L232.635 85.9382L312.582 67.0651L279.912 141.66L278.965 143.822L281.099 144.878L354.603 181.25L281.083 217.63L278.969 218.676L279.914 220.832L312.595 295.453L232.613 276.572L230.319 276.03L229.646 278.266L206.186 356.222L157.194 290.915L155.778 289.028L153.806 290.316L85.1939 335.105L90.1011 253.954L90.2436 251.598L87.8773 251.328L6.23291 242.017L62.7305 182.968L64.3615 181.263L62.7228 179.551L6.22055 120.497L87.9005 111.182L90.2424 110.915L90.1011 108.579L85.1916 27.39Z"
          fill="#FEB29C"
          stroke="black"
          strokeWidth="4.98487"
        />
      </StyledSVG>

      <img alt="" src="images/get-in-touch-empty.png" />
    </div>
  )
}

export default GetInTouch
