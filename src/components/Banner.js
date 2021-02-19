import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Tooltip,
  Button,
} from "@material-ui/core";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    background: `url(${process.env.PUBLIC_URL + "/assets/about2.jpg"})`,
    height: "350px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    boxShadow: "0 0 20px 10px rgba(0,0,0, .2)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "50px",
    paddingBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "30px",
    },
  },
  title: {
    color: "white",
    textShadow: "0 0 2px black",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "bold",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  desc: {
    width: "600px",
    color: "white",
    textShadow: "0 0 1px black",
    [theme.breakpoints.down("sm")]: {
      width: "350px",
      fontSize: "14px",
    },
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Manfaat Produk Kami<span>.</span>
        </Typography>
        <Typography variant="subtitle1" className={classes.desc}>
          Pizza memiliki kaya <i>kandungan serat</i>, <i>karbohidrat</i> dan{" "}
          <i>nutrisi</i> untuk tubuh. Saus tomat ini kaya akan kandungan
          likopen. Karena dalam proses memasak dan mengolah tomat menjadi saus,
          kandungan air yang terdapat dalam tomat menguap sehingga konsentrasi
          antioksidan dalam saus lebih tinggi.
          <br />
          <Tooltip title="More!" arrow>
            <Button
              style={{ marginTop: "20px" }}
              endIcon={<ArrowRightOutlinedIcon />}
              variant="outlined"
              color="secondary"
            >
              Lebih Banyak
            </Button>
          </Tooltip>
        </Typography>
      </Container>
    </div>
  );
}

export default Banner;
