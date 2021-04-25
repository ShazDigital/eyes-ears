import * as React from "react";
import styles, { backgroundDotStyles } from "./index.styles";
import "normalize.css";

// markup
const IndexPage = () => {
  return (
    <div css={styles}>
      <div css={backgroundDotStyles}></div>
      <h1>Eyes & Ears</h1>
      <p>A new take on creative design and talent support.</p>
      <img className="logo" src={`images/eyes-ears-logo.svg`} />
      <h2>Coming soon</h2>
      <img className="footer-logo" src={`images/supply-footer-logo.svg`} />
    </div>
  );
};

export default IndexPage;
