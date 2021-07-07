import React, { useState } from 'react'
import SineWave from './SineWave'

const ComingSoon = () => {
  const [active, setActive] = useState(false)
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="soon-img"
      role="button"
      tabIndex={0}
    >
      <SineWave active={active} />
      <p className="bogue-text">Finger On The Pulse</p>
      <img alt="" src={`images/soon-blank.svg`} />
    </div>
  )
}

export default ComingSoon
