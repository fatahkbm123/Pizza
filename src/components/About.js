import React from "react";
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import DoneAllIcon from "@material-ui/icons/DoneAll";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "80px",
  },

  title: {
    textAlign: "center",
    marginBottom: "80px",
    position: "relative",
    fontFamily: "Bebas Neue",
    fontSize: "3rem",

    "& > span": {
      margin: "10px auto",
      background: "black",
      width: "50px",
      height: "4px",
      borderRadius: "10px",
      display: "block",
    },
  },

  subTitle: {
    marginBottom: "20px",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "bold",

    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  desc: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" className={classes.title}>
          Tentang Kami
          <span></span>
        </Typography>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={7}>
            <img
              src={process.env.PUBLIC_URL + "/assets/pizza1.jpg"}
              alt="Images 1"
              width="100%"
              style={{ borderRadius: "20px", boxShadow: "0 0 5px black" }}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography
              variant="h3"
              color="secondary"
              className={classes.subTitle}
            >
              Pizza Keliling Sekolah<span style={{ fontSize: "2rem" }}>.</span>
            </Typography>
            <Typography variant="subtitle1" className={classes.desc}>
              Pizza Keliling Sekolah atau bisa disebut juga PKS adalah sebuah
              Pedagang pizza yang berjualan di SMK Negeri 2 Jakarta. kami
              berjualan menggunakan barang seadanya dengan menggunakan MagicKom,
              tepung yang sudah di ngembangkan, Saus pasta, dan juga berbagai
              macam topping yang kami sediakan disini, diantaranya Tomat, Sosis,
              Bawang Bombai, Keju, Paprika, Dan sayuran semacam lainnya. Target
              pasar yang kami inginkan adalah untuk semua orang yang ingin
              memakan Pizza buatan kami.
            </Typography>
            <Tooltip title="More!" arrow>
              <Button
                style={{ marginTop: "30px" }}
                endIcon={<ArrowRightOutlinedIcon />}
                variant="outlined"
                color="secondary"
              >
                Lebih Lanjut
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          spacing={5}
          style={{ marginTop: 30 }}
        >
          <Grid item xs={12} sm={5}>
            <Typography
              variant="h3"
              color="primary"
              className={classes.subTitle}
            >
              Keunggulan Pizza<span style={{ fontSize: "2rem" }}>.</span>
            </Typography>
            <Typography variant="subtitle1" className={classes.desc}>
              Keunggulan dari pizza kami itu ada banyak diantara lainnya sebagai
              berikut yaitu :
              <Grid container direction="column">
                <Grid item>
                  <IconButton color="primary">
                    <DoneAllIcon fontSize="small" />
                  </IconButton>
                  <strong>Bahan bahannya terbuat dari kualitas terbaik.</strong>
                </Grid>
                <Grid item>
                  <IconButton color="primary">
                    <DoneAllIcon fontSize="small" />
                  </IconButton>
                  <strong>Pelayanannya cepat.</strong>
                </Grid>
                <Grid item>
                  <IconButton color="primary">
                    <DoneAllIcon fontSize="small" />
                  </IconButton>
                  <strong>Pizzanya terjamin bersih.</strong>
                </Grid>
                <Grid item>
                  <IconButton color="primary">
                    <DoneAllIcon fontSize="small" />
                  </IconButton>
                  <strong>Murah dan terjangkau.</strong>
                </Grid>
                <Grid item>
                  <IconButton color="primary">
                    <DoneAllIcon fontSize="small" />
                  </IconButton>
                  <strong>Ada banyak macam rasa.</strong>
                </Grid>
                <Grid item>
                  <IconButton color="primary">
                    <DoneAllIcon fontSize="small" />
                  </IconButton>
                  <strong>Pemprosesan pembelian tergolong cepat.</strong>
                </Grid>
              </Grid>
            </Typography>
            <Tooltip title="More!" arrow>
              <Button
                style={{ marginTop: "30px" }}
                endIcon={<ArrowRightOutlinedIcon />}
                variant="outlined"
                color="primary"
              >
                Lebih Lanjut
              </Button>
            </Tooltip>
          </Grid>
          <Grid item xs={12} sm={7}>
            <img
              src={process.env.PUBLIC_URL + "/assets/about3.png"}
              alt="Images 2"
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
