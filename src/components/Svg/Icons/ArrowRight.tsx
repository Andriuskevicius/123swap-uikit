import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 27 24" {...props}>
      <path d="M1.5 10.5C0.671573 10.5 0 11.1716 0 12C0 12.8284 0.671573 13.5 1.5 13.5L1.5 10.5ZM26.5607 13.0607C27.1464 12.4749 27.1464 11.5251 26.5607 10.9393L17.0147 1.3934C16.4289 0.807611 15.4792 0.807611 14.8934 1.3934C14.3076 1.97919 14.3076 2.92893 14.8934 3.51472L23.3787 12L14.8934 20.4853C14.3076 21.0711 14.3076 22.0208 14.8934 22.6066C15.4792 23.1924 16.4289 23.1924 17.0147 22.6066L26.5607 13.0607ZM1.5 13.5L25.5 13.5V10.5L1.5 10.5L1.5 13.5Z" fill="white"/>  
    </Svg>
  );
};

export default Icon;
