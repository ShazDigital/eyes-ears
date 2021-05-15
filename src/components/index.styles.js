import { css } from "@emotion/react";

const styles = css`
  position: relative;
  text-align: center;
  font-family: "Whyte", Helvetica, sans-serif;
  font-size: 22px;
  color: #162c29;
  padding: 0 16px;
  * {
    box-sizing: border-box;
  }

  h1 {
    font-family: "Bogue-Black", Garamond, Baskerville, sans-serif;
    font-size: 50px;
    color: white;
    font-size: 52px;
    margin: 0;
    padding-top: 110px;
    @media (min-width: 768px) {
      font-size: 72px;
    }
  }

  h2 {
    font-family: "Bogue-Extrabold", Garamond, Baskerville, sans-serif;
    color: #ffe8e1;
    font-size: 30px;
    margin-top: 45px;
    @media (min-width: 768px) {
      font-size: 100px;
    }
  }

  .MuiContainer-root {
    padding-left: 40px;
    padding-right: 40px;
  }

  .img-container {
    display: flex;
  }

  .img-left {
    width: 34%;
    margin-right: 50px;
    img {
      height: 100%;
    }
  }

  .img-right {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 66%;
    justify-content: flex-start;
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
  }

  img {
    display: block;
    width: 100%;
  }

  .logo {
    margin-top: 70px;
    @media (min-width: 768px) {
      margin-top: 140px;
    }
  }

  .footer-logo {
    margin-top: 150px;
    margin-bottom: 70px;
  }
`;

export default styles;
