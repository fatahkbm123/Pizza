import React from "react";
import { makeStyles, Grid, Chip, Tooltip } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles({
  root: {
    width: "100%",
    boxShadow: "0 0 5px rgba(0,0,0,.3)",
  },
  media: {
    height: 160,
    objectFit: "cover",
  },
});

export default function CardComponent({ data }) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1} justify="center">
        {data.map((item, index) => {
          const tags = item.tags.split(",");
          return (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.media}
                    image={item.webformatURL}
                    title={`Pizza ${index++}`}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      style={{ marginTop: "-8px" }}
                    >
                      Pizza {`${index++}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Amet exercitationem deleniti cum ad, corrupti provident.
                    </Typography>
                    {tags.map((tag, index) => (
                      <Chip
                        key={index}
                        style={{
                          marginTop: "12px",
                          marginRight: "3px",
                          textTransform: "capitalize",
                          fontSize: "12px",
                        }}
                        variant="outlined"
                        size="small"
                        color="primary"
                        label={tag}
                      />
                    ))}
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Tooltip title="Share" arrow>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<ShareIcon />}
                      variant="outlined"
                    >
                      Bagikan
                    </Button>
                  </Tooltip>
                  <Tooltip title="Beli" arrow>
                    <Button
                      size="small"
                      color="primary"
                      variant="outlined"
                      endIcon={<ShoppingCartIcon />}
                    >
                      Beli
                    </Button>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
