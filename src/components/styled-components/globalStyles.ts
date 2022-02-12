// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { ITheme } from "./styles.interface";

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
 body {
    background: ${({ body }: ITheme) => body};
    color: ${({ text }: ITheme) => text};
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
  }
`;
