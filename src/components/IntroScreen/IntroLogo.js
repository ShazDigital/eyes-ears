import React, { useRef, useEffect, useState } from 'react'
import { MorphSVGPlugin } from 'gsap/all'
import gsap from 'gsap/gsap-core'

const IntroLogo = ({ auto }) => {
  const topEye = useRef(null)
  const bottomEye = useRef(null)
  const ear = useRef(null)
  const [active, setActive] = useState(false)
  const [tween, setTween] = useState(null)

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin)
    if (tl) {
      tl.pause()
    }
    const tl = gsap.timeline({ ease: 'circ', repeat: auto ? 2 : 0 })
    let earPath1 = MorphSVGPlugin.convertToPath('#ear1')

    let anim = tl
      .to(
        bottomEye.current,
        {
          morphSVG: topEye.current,
          duration: 0.75,
        },
        'anim'
      )
      .to(
        topEye.current,
        {
          morphSVG: bottomEye.current,
          duration: 0.75,
        },
        'anim'
      )
      .to(
        topEye.current,
        {
          x: 105,
          duration: 0.75,
        },
        'anim'
      )
      .to(earPath1, { x: -150, y: 0, duration: 0.75 }, 'anim')
      .to(
        bottomEye.current,
        {
          morphSVG: topEye.current,
          duration: 0.75,
        },
        'anim2'
      )
      .to(
        bottomEye.current,
        {
          x: 115,
          y: 0,
          duration: 0.75,
        },
        'anim2'
      )
      .to(
        topEye.current,
        {
          morphSVG: bottomEye.current,
          duration: 0.75,
        },
        'anim2'
      )
      .to(
        topEye.current,
        {
          x: -50,
          y: 110,
          duration: 0.75,
        },
        'anim2'
      )
      .to(earPath1, { x: -90, y: -80, duration: 0.75 }, 'anim2')
      .to(
        bottomEye.current,
        {
          morphSVG: bottomEye.current,
          duration: 0.75,
        },
        'anim3'
      )
      .to(
        bottomEye.current,
        {
          x: 0,
          y: 0,
          duration: 0.75,
        },
        'anim3'
      )

      .to(
        topEye.current,
        {
          x: 0,
          y: 0,
          duration: 0.75,
        },
        'anim3'
      )
      .to(earPath1, { x: 0, y: 0, duration: 0.75 }, 'anim3')
    if (auto) {
      tl.play()
    } else {
      tl.pause()
    }
    setTween(anim)
  }, [])

  useEffect(() => {
    if (!tween) return
    if (active && !tween.isActive()) {
      tween.play(0)
    } else if (!active) {
      // tween.pause()
    }
  }, [active, tween])

  return (
    <svg
      width="237"
      height="208"
      viewBox="0 0 237 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Top eye */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M143.915 73.6818C154.491 68.8305 164.136 59.1419 183.426 39.7647C164.136 20.3875 154.491 10.6989 143.915 5.84755C126.917 -1.94918 107.386 -1.94918 90.3882 5.84755C79.8116 10.6989 70.1667 20.3875 50.877 39.7647C70.1667 59.1419 79.8116 68.8305 90.3882 73.6818C107.386 81.4786 126.917 81.4786 143.915 73.6818ZM130.407 13.2553C115.766 13.2553 103.897 25.1241 103.897 39.7651C103.897 54.406 115.766 66.2749 130.407 66.2749C145.048 66.2749 156.916 54.406 156.916 39.7651C156.916 25.1241 145.048 13.2553 130.407 13.2553Z"
        ref={topEye}
        fill="#162C29"
        id="topeye"
      />
      {/* Bottom eye */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.2176 113.676C29.5445 118.547 19.8118 128.275 0.346161 147.732L0.34619 147.732C19.8118 167.188 29.5445 176.916 40.2175 181.788C57.3705 189.616 77.0789 189.616 94.2318 181.788C104.905 176.916 114.638 167.188 134.103 147.732C114.638 128.275 104.905 118.547 94.2318 113.676C77.0789 105.847 57.3705 105.847 40.2176 113.676ZM50.2557 175.681C64.589 175.681 76.2085 163.614 76.2085 148.73C76.2085 133.845 64.589 121.779 50.2557 121.779C35.9223 121.779 24.3028 133.845 24.3028 148.73C24.3028 163.614 35.9223 175.681 50.2557 175.681Z"
        fill="#162C29"
        ref={bottomEye}
      />
      {/* Ear */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M162.45 97.4785C170.522 89.4707 182.509 84.3468 198.213 84.3468C214.189 84.3468 225.087 90.9658 231.19 99.904C237.18 108.675 238.424 119.533 235.449 127.798L234.258 131.106L227.625 128.731L228.816 125.423C230.98 119.412 230.169 110.895 225.365 103.861C220.676 96.9939 212.044 91.3764 198.213 91.3764C184.108 91.3764 173.996 95.9397 167.42 102.463C160.814 109.017 157.538 117.783 157.538 126.61C157.538 137.603 162.728 146.16 169.788 154.281C172.539 157.444 175.485 160.446 178.481 163.499C179.359 164.393 180.241 165.292 181.124 166.201C184.96 170.148 188.769 174.243 191.85 178.642C194.188 181.978 196.082 185.133 197.745 187.901L197.834 188.048C199.549 190.904 200.965 193.245 202.437 195.17C203.887 197.065 205.259 198.375 206.773 199.232C208.25 200.068 210.07 200.593 212.603 200.593C215.895 200.593 218.169 199.78 219.781 198.659C221.411 197.526 222.604 195.912 223.439 193.943C225.159 189.891 225.165 184.771 224.55 181.26L223.943 177.798L230.885 176.587L231.492 180.049C232.247 184.357 232.356 190.963 229.93 196.683C228.692 199.6 226.75 202.383 223.81 204.427C220.853 206.482 217.123 207.623 212.603 207.623C209.01 207.623 205.962 206.856 203.294 205.345C200.663 203.856 198.614 201.762 196.834 199.434C195.077 197.137 193.455 194.436 191.791 191.665L191.736 191.575C190.055 188.776 188.268 185.801 186.073 182.668C183.339 178.765 179.872 175.012 176.064 171.093C175.237 170.243 174.392 169.382 173.537 168.51C170.515 165.433 167.368 162.227 164.464 158.886C156.959 150.254 150.49 140.09 150.49 126.61C150.49 116.064 154.41 105.455 162.45 97.4785Z M212.547 113.299C214.957 116.78 215.878 121.26 215.106 126.543L214.599 130.013L207.5 129.022L208.007 125.552C208.582 121.614 207.819 118.977 206.607 117.227C205.38 115.453 203.415 114.189 200.855 113.516C195.574 112.128 188.642 113.515 184.11 116.96C181.624 118.849 180.262 120.94 179.666 123.108C179.06 125.309 179.169 127.864 180.105 130.75C182.007 136.611 187.171 143.333 194.986 149.698C197.886 152.06 200.82 155.293 203.052 158.671C205.213 161.941 207.056 165.858 207.056 169.514V173.019H199.885V169.514C199.885 167.901 198.951 165.384 197.028 162.474C195.175 159.671 192.719 156.976 190.395 155.083C182.038 148.276 175.748 140.508 173.27 132.868C172.016 129.003 171.704 125.055 172.741 121.287C173.786 117.488 176.13 114.146 179.708 111.426L179.708 111.426C185.957 106.677 195.196 104.77 202.717 106.747C206.559 107.757 210.153 109.84 212.547 113.299Z M230.511 142.704L226.917 143.994C223.599 145.185 220.28 147.332 219.18 149.641C218.714 150.62 218.6 151.702 219.208 153.06C219.865 154.528 221.465 156.515 224.929 158.905L227.998 161.024L223.276 166.531L220.207 164.413C216.104 161.58 213.375 158.671 212.023 155.651C210.621 152.52 210.816 149.523 212.059 146.911C214.38 142.038 220.082 138.963 224.041 137.543L227.636 136.252L230.511 142.704Z"
        fill="#162C29"
        id="ear1"
        ref={ear}
      />
    </svg>
  )
}

export default IntroLogo
