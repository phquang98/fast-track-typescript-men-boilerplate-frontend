import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, Typography, Grid, Button, Link as UILink } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

import { ProductType } from "../../types/personalType";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const ProductCard: FC<ProductType> = ({ _id, name, description, categories, variants, size }: ProductType) => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              ID Number: {_id}
            </Typography>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {description}
            </Typography>
            <Typography variant="body2" component="p">
              Categories: {categories.join(", ")}
            </Typography>
            <Typography variant="body2" component="p">
              Variants: {variants.join(", ")}
            </Typography>
            <Typography variant="body2" component="p">
              Size: {size}
            </Typography>
          </CardContent>
          <CardActions>
            <UILink href="/api/v1/products/product_id_here">
              <Button size="small">More Details</Button>
            </UILink>
          </CardActions>
        </Card>
      </Grid>
    </BrowserRouter>
  );
};

export default ProductCard;
