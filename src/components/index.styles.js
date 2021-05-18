import { css } from "@emotion/react";

const styles = css`
  position: relative;
  text-align: center;
  font-family: "Whyte-Inktrap", Helvetica, sans-serif;
  font-size: 22px;
  color: #162c29;
  padding: 0 16px;
  background-color: #f5e8e1;
  * {
    box-sizing: border-box;
  }

  .eyes-header {
    margin-top: 165px;
    text-transform: uppercase;
    margin-bottom: 85px;
    font-size: 30px;
  }

  .eyes-arrow {
    max-width: 45px;
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
    transform: translate(-50%, -50%) rotate(-26deg);
    font-size: 6vw;
    left: 48%;
    top: 36%;
    @media (min-width: 768px) {
      font-size: 41px;
      left: 50%;
      top: 40%;
    }
  }

  .are-text {
    font-size: 6vw;
    left: 0;
    width: 100%;
    @media (min-width: 768px) {
      font-size: 3.65vw;
    }
  }

  .bogue-text {
    position: absolute;
    font-family: "Bogue-Bold", Garamond, Baskerville, sans-serif;
    margin: 4% 0 0;
    font-size: 6vw;
    width: 100%;
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

  .soon-img {
    max-height: 309px;
    margin-top: 40px;
    position: relative;
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
        ${"" /* top: 265px; */}
        font-size: 40px;
        max-width: 70%;
      }
    }

    &:after {
      content: "";
      display: block;
      background: url("../images/arrow-down.png");
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
