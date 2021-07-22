import { css, keyframes } from '@emotion/react'
const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -20px, 0);
  }

  70% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0,-2px,0);
  }
`
const styles = css`
  position: relative;
  text-align: center;
  font-family: 'Whyte-Inktrap', Helvetica, sans-serif;
  font-size: 22px;
  color: #162c29;
  padding: 0 16px;
  background-color: #f5e8e1;
  * {
    box-sizing: border-box;
  }
  *,
  html,
  body {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .no-scroll {
    overflow: hidden;
  }

  .eyes-header {
    margin-top: 55px;
    text-transform: uppercase;
    margin-bottom: 25px;
    font-size: 25px;
    @media (max-width: 768px) {
      margin-top: 0px;
    }
  }

  .intro {
    height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000000;
    background: #f5e8e1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .eyes-arrow {
    max-width: 32px;
    @media (max-width: 768px) {
      max-width: 16px;
    }
  }

  .main-logo {
    transform: scale(0.9);
    @media (max-width: 768px) {
      transform: scale(0.4);
    }
  }

  .upper-container {
    padding-top: 96px;
    @media (max-width: 768px) {
      padding-top: 20px;
    }
  }

  .bounce {
    animation: ${bounce} 1s ease infinite;
  }

  h2 {
    max-width: 1000px;
    font-size: 36px;
    margin: 75px auto 75px;
    span {
      font-family: 'Bogue-Bold', Garamond, Baskerville, sans-serif;
    }

    &.main-title {
      @media (max-width: 768px) {
        font-size: 16px;
        margin: 0 auto;
        margin-top: 20px;
      }
    }
  }

  .MuiContainer-root {
    @media (min-width: 960px) {
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  .img-container {
    display: flex;
    align-items: start;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    img {
      display: block;
      width: 100%;
    }
  }

  .img-left {
    width: 100%;
    position: relative;
    overflow: hidden;
    @media (min-width: 768px) {
      width: 35.25%;
    }
    &.desktop {
      @media (max-width: 768px) {
        display: none;
      }
    }
    &.mobile {
      margin-top: 20px;
      @media (min-width: 768px) {
        display: none;
      }
    }
    img {
      height: 100%;
    }
    canvas {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }
  }

  .job-word {
    position: absolute;
    text-transform: uppercase;
    font-size: 2.8rem;
    white-space: nowrap;
    margin: 0;
    overflow-y: hidden;
    @media (min-width: 767px) {
      font-size: 4.35vw;
    }
    @media (min-width: 1300px) {
      font-size: 55px;
    }
  }

  .cd {
    top: 29%;
    left: 29%;
    transform: rotate(66.36deg) translateX(-35px);
  }

  .des {
    top: 27%;
    left: -22%;
    transform: rotate(-47.31deg) translateX(70px);
  }

  .pr {
    top: 48%;
    left: 0%;
    transform: rotate(18.13deg);
  }

  .dev {
    top: 75%;
    left: -7%;
    transform: rotate(-32.51deg) translateX(15px);
  }

  .ux {
    top: 83.5%;
    transform: rotate(-21.52deg);
  }

  .img-right {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (min-width: 768px) {
      width: 66%;
      margin-top: 0;
      padding-left: 50px;
    }
  }

  .text-in-img {
    position: absolute;
    font-family: 'Whyte-Inktrap', Helvetica, sans-serif;
  }

  .touch-text {
    text-transform: uppercase;
    transform: translate(-50%, -50%) rotate(-26deg);
    font-size: 5vw;
    left: 49%;
    top: 38%;
    @media (min-width: 768px) {
      font-size: 2.75vw;
      left: 48%;
      top: 36%;
    }
  }

  .are-text {
    font-size: 5vw;
    left: 0;
    width: 100%;

    @media (min-width: 768px) {
      font-size: 3vw;
    }
    @media (min-width: 1200px) {
      font-size: 2.5vw;
    }
  }

  .bogue-text {
    position: absolute;
    font-family: 'Bogue-Bold', Garamond, Baskerville, sans-serif;
    margin: 4% 0 0;
    font-size: 6vw;
    width: 100%;
    transition: all 0.25s cubic-bezier(0.33, 1, 0.68, 1);

    @media (min-width: 768px) {
      font-size: 54px;
    }
  }

  .touch-img,
  .are-img {
    max-height: 370px;
    position: relative;
  }

  .are-img {
    width: 43.5%;
  }

  .touch-img {
    width: 50.5%;
    cursor: pointer;
  }

  @function textShadow($precision, $size, $color) {
    $value: null;
    $offset: 0;
    $length: $size * (1 / $precision) - 1;
    @for $i from 0 through $length {
      $offset: $offset + $precision;
      $shadow: $offset + px $offset + px $color;
      $value: append($value, $shadow, comma);
    }
    @return $value;
  }

  .soon-img {
    max-height: 309px;
    margin-top: 40px;
    position: relative;
    overflow: hidden;
    --shadow: #bb9cfe;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }

  .pulse-img {
    position: relative;
    p {
      top: 49px;
    }
  }

  .pulse-radar-imgs {
    svg {
      margin-top: 50px;
      max-width: 100%;
    }
  }

  .purple-img-container {
    position: relative;
    font-size: 4vw;
    overflow: hidden;
    margin-top: 50px;
    max-width: 100%;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }

  .purple-text {
    p {
      text-transform: uppercase;
      margin-top: 0;
      top: 40%;
      width: 100%;
      font-size: 4.25vw;
      margin-left: 50%;
      transform: translateX(-50%);
      padding: 0 20px;
      @media (min-width: 768px) {
        ${'' /* top: 265px; */}
        font-size: 40px;
        max-width: 70%;
      }
    }

    &:after {
      content: '';
      display: block;
      background: url('../images/arrow-down.png');
      width: 24px;
      height: 40px;
      background-size: cover;
      position: absolute;
      top: 70%;
      left: 50%;
      margin-left: -12px;
      @media (min-width: 768px) {
        top: 80%;
      }
      @media (max-width: 768px) {
        width: 12px;
        height: 20px;
      }
    }
  }

  .radar {
    font-family: 'Bogue-Bold', Garamond, Baskerville, sans-serif;
  }

  .logo {
    max-width: 180px;
  }

  .footer {
    padding-bottom: 40px;
  }

  .footer-logo {
    margin-top: 65px;
    margin-bottom: 15px;
  }
`

export default styles
