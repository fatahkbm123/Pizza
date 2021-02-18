import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import About from "./components/About";
import ServicesData from "./components/ServicesData";
import Banner from "./components/Banner";
import "fontsource-roboto";
import Product from "./components/Product";
import Footer from "./components/Footer";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/pizza2.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
      </div>

      <ServicesData />
      <About />
      <Banner />
      <Product />
      <Footer />
    </>
  );
}

export default App;
