/* eslint-disable @next/next/no-page-custom-font */

import type { AppProps } from "next/app";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple, cyan } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700,
    fontWeightMedium: 600,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
