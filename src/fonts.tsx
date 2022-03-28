import React from "react";
import {Global} from "@emotion/react";

import ProximaNovaLight from "./public/assets/fonts/proximanova-light.woff2";
import ProximaNovaRegular from "./public/assets/fonts/proximanova-regular.woff2";
import ProximaNovaBold from "./public/assets/fonts/proximanova-semibold.woff2";

const Fonts: React.FC = () => {
  return (
    <Global
      styles={`
     @font-face {
          font-family: "Proxima Nova";
          src: url(${ProximaNovaLight}) format("woff2");
          font-style: normal;
          font-display: swap;
          font-weight: 100;
      }
      @font-face {
          font-family: "Proxima Nova";
          src: local("ProximaNova"), url(${ProximaNovaRegular}) format("woff2");  
          font-style: normal;
          font-weight: normal;
          font-display: swap;
             }
 
      @font-face {
          font-family: "Proxima Nova";
          src: url(${ProximaNovaBold}) format("woff2");
          font-weight: 500;
      }
      `}
    />
  );
};

export default Fonts;
