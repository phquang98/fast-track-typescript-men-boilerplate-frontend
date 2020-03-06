import React, { FC } from "react";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { ProductType } from "../../types/personalType";
import ProductCard from "../../components/ProductCard";
import fakeData from "../../hooks/fakeData.json";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       width: "100%",
//       maxWidth: 500
//     },
//     button: {
//       margin: theme.spacing(1)
//     }
//   })
// );

const ProductPage: FC<void> = () => {
  // const classes = useStyles();

  return (
    <div>
      <h2>This is product page</h2>
      <Grid container spacing={3}>
        {fakeData.map((fakeItem: ProductType) => (
          <ProductCard
            key={fakeItem.id}
            id={fakeItem.id}
            name={fakeItem.name}
            description={fakeItem.description}
            categories={fakeItem.categories}
            variants={fakeItem.variants}
            size={fakeItem.size}
          ></ProductCard>
        ))}
      </Grid>
    </div>
  );
};

export default ProductPage;
