import { createGlobalStyle, ThemeProvider } from "styled-components";
import NextLink from "next/link";
import NavBar from "../components/NavBar";

const GlobalStyle = createGlobalStyle`
  html, body {
	margin: 0;
	font-family: sans-serif;
  color: ${({ theme }) => theme.colors.primaryOne};
  background: ${({ theme }) => theme.colors.primaryTwo};
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
  font-family: "Montserrat-Bold";
  src: url("/static/fonts/Montserrat/Montserrat-Bold.ttf");
}
@font-face {
  font-family: "Montserrat-Regular";
  src: url("/static/fonts/Montserrat/Montserrat-Regular.ttf");
}

h1, h2, h3, h4, h5 {
  font-family: "Montserrat-Bold";
}

p {
  font-family: Avenir, sans-serif;
}

a {
  transition: 0.2s;
  color: ${({ theme }) => theme.colors.primaryThree};
  &:hover{ 
    opacity: 0.6;
  }
}
`;

const theme = {
  colors: {
    primaryOne: "#2d2d41",
    primaryTwo: "#f4ebe5",
    primaryThree: "#287aa9",
    secondaryOne: "#a8a3c6",
    secondaryTwo: "#ddabbb",
    secondaryThree: "#f2e2ff",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
