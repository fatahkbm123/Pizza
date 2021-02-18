import React, { useState, useEffect, useRef } from "react";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardComponent from "./Card";

const useStyles = makeStyles({
  span: {
    background: "black",
    width: "100px",
    height: "4px",
    borderRadius: "10px",
    display: "block",
    marginTop: "7px",
  },
});

function Product() {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(4);
  const myAPIKey = useRef("20223851-e267afdfef34f5b5659bcb33a");

  useEffect(() => {
    function getData() {
      fetch(
        `https://pixabay.com/api/?key=${myAPIKey.current}&q=pizza&image_type=photo&pretty=true&per_page=${page}`
      )
        .then((res) => res.json())
        .then((res) => {
          setProduct(res.hits);
        })
        .finally(() => setLoading(false));
    }

    getData();
  }, [page]);

  return (
    <div style={{ marginTop: "50px" }}>
      <Container>
        <Typography
          variant="h4"
          style={{
            marginBottom: "20px",
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "3rem",
          }}
        >
          Produk Kami
          <span className={classes.span}></span>
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            marginBottom: "40px",
            color: "rgba(0,0,0,.8)",
          }}
        >
          Disini kami menjual macam macam pizza diantaranya sebagai berikut.
        </Typography>

        <CardComponent data={product} />
        <div style={{ display: "flex", margin: "40px 0" }}>
          {loading ? (
            <CircularProgress style={{ margin: "auto" }} />
          ) : (
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "auto" }}
              onClick={() => {
                setPage((prevCount) => prevCount + 4);
                setLoading(!loading);
              }}
            >
              Lebih Banyak Pizza
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Product;
