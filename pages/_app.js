import { createGlobalStyle, ThemeProvider } from "styled-components";
import NextLink from "next/link";

const GlobalStyle = createGlobalStyle`
  html, body {
	margin: 0;
	font-family: sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, p {
	margin: 0;
}

@font-face {
  font-family: "Montserrat";
  src: url("fonts/Montserrat/Montserrat-Bold.ttf");
  font-weight: 800;
}
@font-face {
  font-family: "Montserrat";
  src: url("fonts/Montserrat/Montserrat-Regular.ttf");
  font-weight: 500;
}

h1, h2, h3, h4, h5 {
  font-family: "Montserrat";
}

p {
  font-family: Avenir, sans-serif;
}
`;

const theme = {
  colors: {
    primaryOne: "#2d2d41",
    primaryTwo: "#f4ebe5",
    primaryThree: "#9da6fc",
    secondaryOne: "#a8a3c6",
    secondaryTwo: "#ddabbb",
    secondaryThree: "#f2e2ff",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
