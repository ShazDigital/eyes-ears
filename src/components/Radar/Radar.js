import React from 'react'
import RadarImage from './RadarImage'

const Radar = () => {
  return (
    <div className="purple-img-container">
      <div className="purple-text">
        <p className="text-in-img">
          An <span className="radar">under-the-radar</span> idea brought to you
          by
        </p>
      </div>
      <RadarImage />
    </div>
  )
}

export default Radar
