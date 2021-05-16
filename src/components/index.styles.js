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
      width: 34%;
      margin-right: 50px;
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
    @media (min-width: 768px) {
      width: 66%;
      justify-content: flex-start;
      margin-top: 0;
    }
  }

  .touch-img,
  .are-img {
    max-height: 370px;
  }

  .are-img {
    width: 43%;
    margin-left: 3%;
  }

  .touch-img {
    width: 51%;
    margin-right: 3%;
  }

  .soon-img {
    max-height: 309px;
    margin-top: 50px;
  }

  .pulse-radar-imgs {
    img {
      margin-top: 50px;
      max-width: 100%;
    }
  }

  .logo {
    max-width: 235px;
    ${"" /* margin-top: 70px;
    @media (min-width: 768px) {
      margin-top: 140px;
    } */}
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
