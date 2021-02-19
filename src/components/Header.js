import React from "react";
import { makeStyles, Button, Container, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
  },

  container: {
    padding: "0",
    color: "white",
    [theme.breakpoints.down("md")]: {
      "& > h1": {
        fontSize: "3rem",
        width: "500px",
        marginBottom: "8px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& > h1": {
        fontSize: "2.5rem",
        width: "300px",
        marginBottom: "8px",
      },
    },
  },

  titleContainer: {
    fontFamily: "Abril Fatface, cursive",
    fontSize: "3rem",
    textShadow: "0 0 1px black",
    marginBottom: "-15px",
  },

  paragraph: {
    width: 550,
    marginTop: "30px",
    marginBottom: "50px",
    [theme.breakpoints.down("md")]: {
      width: 400,
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
      fontSize: "14px",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />

      <Container className={classes.container}>
        <h1 className={classes.titleContainer}>
          Yang Anda butuhkan hanyalah pizza.
        </h1>
        <Typography variant="subtitle1" className={classes.paragraph}>
          Pizza Keliling Sekolah, pizza murah dan terjamin terjangkau oleh
          kebersihannya. tidak juga kebersihannya rasanya pun Mantap Djiwa,
          banyak aneka ragam dan rasa yang kami buat, dan juga pizza ini sudah
          terdiri dari kami sekolah SMK hingga sekarang. Tunggu apalagi buruan
          beli keburu habis.
        </Typography>
        <Button
          style={{ textTransform: "capitalize" }}
          variant="contained"
          color="secondary"
          endIcon={<ShoppingCartIcon />}
        >
          Beli Sekarang
        </Button>
      </Container>
    </div>
  );
}

export default Header;
