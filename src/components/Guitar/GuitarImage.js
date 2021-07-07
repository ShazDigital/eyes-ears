import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import useSound from 'use-sound'
import c from './sounds/c.mp3'
import c2 from './sounds/c2.mp3'
import b from './sounds/b.mp3'
import g from './sounds/g.mp3'
import e from './sounds/e.mp3'

import { MorphSVGPlugin } from 'gsap/all'
const GuitarImage = () => {
  const [playC] = useSound(c, { volume: 0.25 })
  const [playE] = useSound(e, { volume: 0.25 })
  const [playG] = useSound(g, { volume: 0.25 })
  const [playB] = useSound(b, { volume: 0.25 })
  const [playC2] = useSound(c2, { volume: 0.25 })
  const [sounds] = useState({
    1: playC,
    2: playE,
    3: playG,
    4: playB,
    5: playC2,
  })

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin)
  }, [])

  function handleVibrateString(el) {
    var tl = gsap.timeline({ ease: 'back', repeat: 2 })
    var tl2 = gsap.timeline({ duration: 0.1 })
    tl2.to(el, { stroke: '#888' }).to(el, { stroke: 'black' })
    tl.to(el, { duration: 0.1, y: 2 }).to(el, {
      duration: 0.1,
      y: -2,
    })
    const num = parseInt(el.split('')[el.length - 1])
    switch (num) {
      case 1:
        playC()
        break
      case 2:
        playE()
        break
      case 3:
        playG()
        break
      case 4:
        playB()
        break
      case 5:
        playC2()
        break
    }
  }

  return (
    <svg
      width="1202"
      height="622"
      viewBox="0 0 1202 622"
      fill="none"
      style={{ display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        y="619.5"
        width="617"
        height="1197"
        transform="rotate(-90 2.5 619.5)"
        fill="#F7941D"
        stroke="black"
        strokeWidth="5"
      />
      <circle
        cx="601"
        cy="311"
        r="150"
        transform="rotate(-90 601 311)"
        fill="#FEB29C"
        stroke="black"
        strokeWidth="10"
      />
      {/* Top String */}
      <path d="M0 194L1200 194" id="string1" stroke="black" strokeWidth="5" />
      <g
        style={{ opacity: 0, transform: 'translateY(-118px)' }}
        onMouseEnter={() => handleVibrateString('#string1')}
      >
        <path
          d="M1200 285C1146.7 285 1143.21 338 1092.48 338C1029.08 338 1037.35 285 980.371 285C923.396 285 926.152 338 869.178 338C812.203 338 814.04 285 758.903 285C703.766 285 701.01 338 647.71 338C594.411 338 594.411 285 538.355 285C482.299 285 483.218 338 429 338 M537 285C483.701 285 480.209 338 429.483 338C366.075 338 374.346 285 317.371 285C260.396 285 263.152 338 206.178 338C149.203 338 151.04 285 95.9033 285C47.8637 285 39.5872 325.234 3 335.592"
          stroke="black"
          strokeWidth="5"
          id="string3--active"
        />
        <path d="" stroke="black" strokeWidth="5" id="string3--active" />
      </g>
      {/* Second String */}
      <path id="string2" d="M0 253L1200 253" stroke="black" strokeWidth="5" />
      <g
        style={{ opacity: 0, transform: 'translateY(-59px)' }}
        onMouseEnter={() => handleVibrateString('#string2')}
      >
        <path
          d="M1200 285C1146.7 285 1143.21 338 1092.48 338C1029.08 338 1037.35 285 980.371 285C923.396 285 926.152 338 869.178 338C812.203 338 814.04 285 758.903 285C703.766 285 701.01 338 647.71 338C594.411 338 594.411 285 538.355 285C482.299 285 483.218 338 429 338 M537 285C483.701 285 480.209 338 429.483 338C366.075 338 374.346 285 317.371 285C260.396 285 263.152 338 206.178 338C149.203 338 151.04 285 95.9033 285C47.8637 285 39.5872 325.234 3 335.592"
          stroke="black"
          strokeWidth="5"
          id="string3--active"
        />
        <path d="" stroke="black" strokeWidth="5" id="string3--active" />
      </g>
      {/* Third String */}
      <path id="string3" d="M0 312L1200 312" stroke="black" strokeWidth="5" />
      <g
        style={{ opacity: 0 }}
        onMouseEnter={() => handleVibrateString('#string3')}
      >
        <path
          d="M1200 285C1146.7 285 1143.21 338 1092.48 338C1029.08 338 1037.35 285 980.371 285C923.396 285 926.152 338 869.178 338C812.203 338 814.04 285 758.903 285C703.766 285 701.01 338 647.71 338C594.411 338 594.411 285 538.355 285C482.299 285 483.218 338 429 338 M537 285C483.701 285 480.209 338 429.483 338C366.075 338 374.346 285 317.371 285C260.396 285 263.152 338 206.178 338C149.203 338 151.04 285 95.9033 285C47.8637 285 39.5872 325.234 3 335.592"
          stroke="black"
          strokeWidth="5"
          id="string3--active"
        />
        <path d="" stroke="black" strokeWidth="5" id="string3--active" />
      </g>
      {/* Fourth String */}
      <path d="M0 371L1200 371" id="string4" stroke="black" strokeWidth="5" />
      <g
        style={{ transform: 'translateY(59px)', opacity: 0 }}
        onMouseEnter={() => handleVibrateString('#string4')}
      >
        <path
          d="M1200 285C1146.7 285 1143.21 338 1092.48 338C1029.08 338 1037.35 285 980.371 285C923.396 285 926.152 338 869.178 338C812.203 338 814.04 285 758.903 285C703.766 285 701.01 338 647.71 338C594.411 338 594.411 285 538.355 285C482.299 285 483.218 338 429 338"
          stroke="black"
          strokeWidth="5"
        />
        <path
          d="M537 285C483.701 285 480.209 338 429.483 338C366.075 338 374.346 285 317.371 285C260.396 285 263.152 338 206.178 338C149.203 338 151.04 285 95.9033 285C47.8637 285 39.5872 325.234 3 335.592"
          stroke="black"
          strokeWidth="5"
        />
      </g>
      {/* Fifth String */}
      <path d="M0 430L1200 430" id="string5" stroke="black" strokeWidth="5" />

      <g
        style={{ transform: 'translateY(118px)', opacity: 0 }}
        onMouseEnter={() => handleVibrateString('#string5', 2, -2)}
      >
        <path
          d="M1200 285C1146.7 285 1143.21 338 1092.48 338C1029.08 338 1037.35 285 980.371 285C923.396 285 926.152 338 869.178 338C812.203 338 814.04 285 758.903 285C703.766 285 701.01 338 647.71 338C594.411 338 594.411 285 538.355 285C482.299 285 483.218 338 429 338"
          stroke="black"
          strokeWidth="5"
        />
        <path
          d="M537 285C483.701 285 480.209 338 429.483 338C366.075 338 374.346 285 317.371 285C260.396 285 263.152 338 206.178 338C149.203 338 151.04 285 95.9033 285C47.8637 285 39.5872 325.234 3 335.592"
          stroke="black"
          strokeWidth="5"
        />
      </g>
      {/* Pink On The Pulse Circle */}
      {/* <circle
        cx="372.5"
        cy="311.5"
        r="23.5"
        transform="rotate(-90 372.5 311.5)"
        fill="#FD93CA"
        fillOpacity="0.9"
      /> */}
    </svg>
  )
}

export default GuitarImage
