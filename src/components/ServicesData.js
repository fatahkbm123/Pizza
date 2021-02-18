import React from "react";
import {
  makeStyles,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import dataServices from "../dataServices";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    marginTop: "8px",
    background: "#333333",
    boxShadow: "0 5px 5px rgba(0,0,0,.2)",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "200px",
    padding: theme.spacing(1),
    background: "none",
    color: "white",
    textAlign: "center",
    position: "relative",
    boxShadow: "none",
  },
  plus: {
    fontSize: "2rem",
    position: "absolute",
    top: 17,
    right: 25,
  },
  desc: {
    fontFamily: "Raleway, sans-serif",
    textTransform: "capitalize",
    fontSize: "12px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {},
  },
}));

function ServicesData() {
  const classes = useStyles();
  return (
    <div className={classes.rootContainer}>
      <Container>
        <Grid container className={classes.root} spacing={2} justify="center">
          {dataServices.map((item, index) => (
            <Grid item key={index}>
              <Paper className={classes.paper}>
                <Typography variant="h3" style={{ marginBottom: "5px" }}>
                  {item.total} <span className={classes.plus}>+</span>
                </Typography>
                <Typography variant="body2" className={classes.desc}>
                  {item.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ServicesData;
