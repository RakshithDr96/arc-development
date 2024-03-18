import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import React from 'react';

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zindex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlignment: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "23em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" style={{ position: "absolute" }}>
          <Grid item style={{ margin: "2rem" }}>
            <Grid container direction="column">
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => props.setValue(0)}
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ margin: "2rem" }}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                to="/services"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/websites"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ margin: "2rem" }}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ margin: "2rem" }}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => props.setValue(3)}
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => props.setValue(3)}
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ margin: "2rem" }}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                to="/contact"
                onClick={() => props.setValue(4)}
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        alt="black decorative slash"
        src={footerAdornment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        style={{ position: "absolute", margin: "-6em" }}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferer"
          target="_blank"
        >
          <img
            alt="facebook logo"
            src={facebook}
            style={{ height: "4em", width: "4em" }}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferer"
          target="_blank"
        >
          <img
            alt="twitter logo"
            src={twitter}
            style={{ height: "4em", width: "4em" }}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferer"
          target="_blank"
        >
          <img
            alt="instagram logo"
            src={instagram}
            style={{ height: "4em", width: "4em" }}
          />
        </Grid>
      </Grid>
    </footer>
  );
}
