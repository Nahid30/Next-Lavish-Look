import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";
import Head from "next/head";
import NextLink from "next/Link";
import React from "react";
import useStyles from "../utilities/styles";

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Lavish Look</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Lavish Look</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>Cart</NextLink>
            <NextLink href="/login" passHref>Login</NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Lavish Look</Typography>
      </footer>
    </div>
  );
}
