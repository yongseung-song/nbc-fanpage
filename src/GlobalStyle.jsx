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
  body * {
    font-family: ${fontFamily};
    ${"" /* background-color: #f0f0f0; */}
    box-sizing: border-box;
  }
  h1 {
    font-variation-settings: "wght" 700;
    font-size: 3rem;
  }
  h3 {
    font-weight: 600;
  }
  input {
    width: 85%;
  }
  textarea {
    resize: none;
    width: 85%;
    line-height: 1.5;
  }
  button {
    display: block;
    width: 100px;
    border: none;
    align-items: end;
    background-color: white;
  }

  footer {
    font-size: 0.8rem;
  }
`;

export default GlobalStyle;
