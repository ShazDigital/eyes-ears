import React, { useRef, useEffect } from 'react'

const SineWave = ({ active }) => {
  const svgRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const width = svgRef.current.viewBox.baseVal.width
    const amp = 50
    let points = []
    let counter = 0
    const line = lineRef.current

    function setPoints() {
      const freq = active ? 6 : 3
      let x,
        y,
        step = 0
      points = []
      for (x = 0; x <= width; x++) {
        x < width / 2 ? step++ : step--
        y = amp * Math.sin(((x + counter) / 100) * freq)
        points.push(x, y)
      }

      return points.join(' ')
    }

    function animateWaves() {
      const speed = active ? 5 : 3
      points = setPoints()
      line.setAttribute('points', points)
      counter += speed
      requestAnimationFrame(animateWaves)
    }

    animateWaves()
  }, [active])
  return (
    <svg
      style={{
        overflow: 'visible',
        position: 'absolute',
        height: '150%',
        width: '96%',
        left: '50%',
        transform: 'translateX(-50%)',
        margin: '0 auto',
        transition: 'all 0.25s',
      }}
      ref={svgRef}
      viewBox="0 0 730 102"
    >
      <polyline
        ref={lineRef}
        stroke={'black'}
        fill={'none'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={9}
        style={{ transition: 'all 0.25s' }}
      />
    </svg>
  )
}

export default SineWave
