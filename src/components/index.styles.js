import { css } from "@emotion/react";

const styles = css`
  position: relative;
  text-align: center;
  font-family: "Whyte", Helvetica, sans-serif;
  font-size: 22px;
  color: #162c29;
  padding: 0 16px;

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

  img {
    max-width: 100%;
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

export const backgroundDotStyles = css`
  background-image: radial-gradient(#ca8e49 10%, #db9a4e 10%);
  background-position: 0 0;
  background-size: 60px 60px;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
