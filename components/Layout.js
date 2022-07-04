import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
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
          <Typography>Lavish Look</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>
            All rights reserved. Lavish Look

        </Typography>
      </footer>
    </div>
  );
}
