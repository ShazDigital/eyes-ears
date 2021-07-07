import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

const StyledArrowHolder = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  bottom: 1px;
  left: 50%;
  width: 90%;
  height: 100%;
  overflow: hidden;
  transform: translateX(-50%);
`

const upDown = keyframes`
  0% {
    top: 40%;
  }
  50% {
    top: 80%;
  }
  100% {
    top: 40%;
  }
`

const StyledSVG = styled.svg`
  position: absolute;
  top: 40%;
  animation: ${upDown} 2s infinite ease-out;
  animation-delay: ${(props) => props.delay};
`

const WhoWeAre = () => {
  const [active, setActive] = useState(false)
  const [timeline, setTL] = useState(null)

  const textRef = useRef(null)
  const wtfRef = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    const splitText = new SplitText(textRef.current)
    const wtfText = new SplitText(wtfRef.current)

    gsap.set(textRef.current, { perspective: 400 })
    gsap.set(wtfRef.current, { perspective: 400 })

    const timeline = tl
      .fromTo(
        wtfText.chars,
        {
          opacity: 1,
          scale: 1,
          ease: 'back',
          duration: 0.15,
          stagger: 0.12,
          y: 0,
        },
        {
          opacity: 0,
          y: 20,
          ease: 'back',
          duration: 0.2,
          transformOrigin: '0% 50% -50',
        }
      )
      .from(splitText.chars, {
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: '0% 50% -50',
        ease: 'back',
        stagger: 0.01,
        duration: 0.4,
      })
    setTL(timeline)
  }, [])

  useEffect(() => {
    if (!timeline) return
    if (active) {
      timeline.play()
    } else {
      timeline.reverse()
    }
  }, [active, timeline])

  return (
    <div
      className="are-img"
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <p ref={textRef} className="text-in-img are-text">
        Be Patient
      </p>
      <p ref={wtfRef} className="text-in-img are-text">
        Coming Soon
      </p>
      <StyledArrowHolder>
        <StyledSVG
          id="arrow1"
          active={active}
          width="74"
          height="60%"
          viewBox="0 0 74 233"
          fill="current"
          delay="0s"
          style={{ left: '0%' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.4761 1.52394C38.5563 -0.395828 35.4437 -0.395828 33.5239 1.52394L2.23944 32.8084C0.319663 34.7282 0.319663 37.8408 2.23944 39.7606C4.15921 41.6803 7.27178 41.6803 9.19155 39.7606L37 11.9521L64.8084 39.7606C66.7282 41.6803 69.8408 41.6803 71.7606 39.7606C73.6803 37.8408 73.6803 34.7282 71.7606 32.8084L40.4761 1.52394ZM41.9159 233L41.9159 5L32.0841 5L32.0841 233L41.9159 233Z"
            fill="black"
          />
        </StyledSVG>
        <StyledSVG
          id="arrow2"
          active={active}
          width="74"
          height="60%"
          viewBox="0 0 74 233"
          fill="current"
          delay="0.4s"
          style={{ left: '35%' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.4761 1.52394C38.5563 -0.395828 35.4437 -0.395828 33.5239 1.52394L2.23944 32.8084C0.319663 34.7282 0.319663 37.8408 2.23944 39.7606C4.15921 41.6803 7.27178 41.6803 9.19155 39.7606L37 11.9521L64.8084 39.7606C66.7282 41.6803 69.8408 41.6803 71.7606 39.7606C73.6803 37.8408 73.6803 34.7282 71.7606 32.8084L40.4761 1.52394ZM41.9159 233L41.9159 5L32.0841 5L32.0841 233L41.9159 233Z"
            fill="black"
          />
        </StyledSVG>
        <StyledSVG
          id="arrow3"
          active={active}
          width="74"
          height="60%"
          viewBox="0 0 74 233"
          fill="current"
          delay="0s"
          style={{ left: '70%' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.4761 1.52394C38.5563 -0.395828 35.4437 -0.395828 33.5239 1.52394L2.23944 32.8084C0.319663 34.7282 0.319663 37.8408 2.23944 39.7606C4.15921 41.6803 7.27178 41.6803 9.19155 39.7606L37 11.9521L64.8084 39.7606C66.7282 41.6803 69.8408 41.6803 71.7606 39.7606C73.6803 37.8408 73.6803 34.7282 71.7606 32.8084L40.4761 1.52394ZM41.9159 233L41.9159 5L32.0841 5L32.0841 233L41.9159 233Z"
            fill="black"
          />
        </StyledSVG>
      </StyledArrowHolder>
      <img alt="" src={`images/we-are-blank.svg`} />
    </div>
  )
}

export default WhoWeAre
