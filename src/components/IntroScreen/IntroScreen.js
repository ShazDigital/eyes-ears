import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import IntroLogo from './IntroLogo'
const IntroScreen = () => {
  const introRef = useRef(null)
  const introContainer = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const tl = gsap.timeline()
    gsap.to(introRef.current, {
      opacity: 0,
      delay: 1.4,
      duration: 1,
      ease: 'easeInOut',
      onStart: () => {
        document.body.style.overflow = 'initial'
      },
      onComplete: () => {
        introRef.current.style.display = 'none'
      },
    })
    tl.from(introContainer.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.9,
    }).to(introContainer.current, {
      opacity: 0,
      duration: 0.6,
    })
  }, [])
  return (
    <div ref={introRef} className="intro">
      <img
        src={'images/gradient.jpg'}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <div ref={introContainer}>
        <IntroLogo auto={true} />
      </div>
    </div>
  )
}

export default IntroScreen
