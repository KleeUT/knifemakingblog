import React from "react";
import { createGlobalStyle } from "styled-components";

//@ts-ignore

import firepixel from "../images/firepixel2.png";
import fireflies from "../images/fireflies.svg";
export const GlobalStyles = createGlobalStyle`
body{
  margin:0;
  padding:0;
  font-size:18pt;
  background: #eee;
  color:#100;
  background-image:url(${fireflies});
  background-position: bottom;
  background-size: auto;
  background-repeat: repeat
}`;
export const WithGlobalStyles = ({ children }) => (
  <>
    <GlobalStyles /> {children}
  </>
);
