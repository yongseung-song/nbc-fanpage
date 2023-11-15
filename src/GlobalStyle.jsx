import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const fontFamily = "NanumSquareNeo-Variable";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  body > * {
    font-family: ${fontFamily};
  }
  h1 {
    font-variation-settings: "wght" 700;
    font-size: 3rem;
  }
`;

export default GlobalStyle;
