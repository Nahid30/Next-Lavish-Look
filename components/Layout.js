import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import Head from "next/head";
import NextLink from "next/Link";
import React from "react";
import useStyles from "../utilities/styles";

export default function Layout({ title, description, children }) {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette:{
      type: 'light',
      primary:{
        main: '#E6425E',
      },
      secondary: {
        main : '#1B98F5'
      }
    }
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Lavish Look` : "Lavish Look"} </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Lavish Look</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                Cart
              </NextLink>
              <NextLink href="/login" passHref>
                Login
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Lavish Look</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
