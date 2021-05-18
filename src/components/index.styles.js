import { css } from "@emotion/react";

const styles = css`
  position: relative;
  text-align: center;
  font-family: "Whyte", Helvetica, sans-serif;
  font-size: 22px;
  color: #162c29;
  padding: 0 16px;
  background-color: #f5e8e1;
  * {
    box-sizing: border-box;
  }

  .hide {
    text-indent: -9999px;
    margin-top: 148px;
  }

  .eyes-arrow {
    max-width: 168px;
  }

  .upper-container {
    padding-top: 336px;
  }

  h2 {
    max-width: 1000px;
    font-size: 36px;
    margin: 100px auto 100px;
    span {
      font-family: "Bogue-Bold", Garamond, Baskerville, sans-serif;
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
    @media (max-width: 768px) {
      flex-direction: column;
    }
    img {
      display: block;
      width: 100%;
    }
  }

  .img-left {
    width: 100%;
    @media (min-width: 768px) {
      width: 35.25%;
    }
    img {
      height: 100%;
    }
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
    font-family: "Whyte-Inktrap", Helvetica, sans-serif;
  }

  .touch-text {
    text-transform: uppercase;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%) rotate(-15deg);
  }

  .are-text {
    font-size: 48px;
    left: 0;
    width: 100%;
    @media (min-width: 768px) {
      font-size: 3.65vw;
    }
  }

  .bogue-text {
    position: absolute;
    font-family: "Bogue-Bold", Garamond, Baskerville, sans-serif;
    margin: 35px 0 0;
    font-size: 54px;
    width: 100%;
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

  .soon-img {
    max-height: 309px;
    margin-top: 40px;
    position: relative;
  }

  .pulse-img {
    position: relative;
    p {
      top: 50px;
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
    width: 100%;
  }

  .radar {
    font-family: "Bogue-Bold", Garamond, Baskerville, sans-serif;
  }

  .logo {
    max-width: 235px;
  }

  .footer {
    padding-bottom: 40px;
  }

  .footer-logo {
    margin-top: 65px;
    margin-bottom: 15px;
  }
`;

export default styles;
