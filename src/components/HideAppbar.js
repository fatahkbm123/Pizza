import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  makeStyles,
  useScrollTrigger,
  Slide,
  Fab,
  Tooltip,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./ScrollTop";

const useStyles = makeStyles({
  appBar: {
    background: "none",
    background: "#333333",
  },

  toolbar: {
    width: "90%",
    margin: "0 auto",
  },

  appbarTitle: {
    flexGrow: 1,
    fontFamily: "Great Vibes, cursive",
    fontWeight: "bold",
    color: "white",
  },

  icon: {
    color: "white",
  },
});

export function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.appbarTitle}>
              PKS
            </Typography>

            <Tooltip title="Facebook!" arrow>
              <IconButton className={classes.icon}>
                <FacebookIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Instagram!" arrow>
              <IconButton
                className={classes.icon}
                style={{ marginRight: "10px" }}
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Kontak Kami!" arrow>
              <Button
                variant="outlined"
                style={{ color: "white", borderColor: "white" }}
                endIcon={<ChatBubbleOutlineIcon />}
              >
                Kontak kami
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
