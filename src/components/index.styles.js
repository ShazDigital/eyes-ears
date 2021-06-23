import { css } from '@emotion/react'

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

  .eyes-header {
    margin-top: 55px;
    text-transform: uppercase;
    margin-bottom: 25px;
    font-size: 25px;
  }

  .eyes-arrow {
    max-width: 32px;
  }

  .upper-container {
    padding-top: 96px;
  }

  h2 {
    max-width: 1000px;
    font-size: 36px;
    margin: 75px auto 75px;
    span {
      font-family: 'Bogue-Bold', Garamond, Baskerville, sans-serif;
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
    font-size: 6vw;
    left: 48%;
    top: 36%;
    @media (min-width: 768px) {
      font-size: 3vw;
      left: 49%;
      top: 36%;
    }
  }

  .are-text {
    font-size: 6vw;
    left: 0;
    width: 100%;

    @media (min-width: 768px) {
      font-size: 3.65vw;
    }
    @media (min-width: 1200px) {
      font-size: 48px;
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
    /* &:hover {
      .bogue-text {
        text-shadow: 6px 6px var(--shadow), 5.75px 5.75px var(--shadow),
          5.5px 5.5px var(--shadow), 5.25px 5.25px var(--shadow),
          5px 5px var(--shadow), 4.75px 4.75px var(--shadow),
          4.5px 4.5px var(--shadow), 4.25px 4.25px var(--shadow),
          4px 4px var(--shadow), 3.75px 3.75px var(--shadow),
          3.5px 3.5px var(--shadow), 3.25px 3.25px var(--shadow),
          3px 3px var(--shadow), 2.75px 2.75px var(--shadow),
          2.5px 2.5px var(--shadow), 2.25px 2.25px var(--shadow),
          2px 2px var(--shadow), 1.75px 1.75px var(--shadow),
          1.5px 1.5px var(--shadow), 1.25px 1.25px var(--shadow),
          1px 1px var(--shadow), 0.75px 0.75px var(--shadow),
          0.5px 0.5px var(--shadow), 0.25px 0.25px var(--shadow);
      }
    } */
  }

  .pulse-img {
    position: relative;
    p {
      top: 49px;
    }
  }

  .pulse-radar-imgs {
    img {
      margin-top: 50px;
      max-width: 100%;
    }
  }

  .purple-img-container {
    position: relative;
    font-size: 4vw;
  }

  .purple-text {
    p {
      text-transform: uppercase;
      margin-top: 0;
      top: 40%;
      width: 100%;
      font-size: 5.25vw;
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
