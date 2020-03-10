import React, { FC } from "react";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { ProductType } from "../../types/personalType";
import ProductCard from "../../components/ProductCard";
// import fakeData from "../../hooks/fakeData.json";
import { useProductAll } from "../../hooks/useBackend";

// Type guard when fetching data
// function isProductType(arg: (ProductType | undefined)[]): arg is ProductType[] {
//   return (arg as ProductType[]) !== undefined;
// }

function isProductType(arg: ProductType[] | undefined): arg is ProductType[] {
  return (arg as ProductType[]) !== undefined;
}

const ProductPage: FC<void> = () => {
  const { productAll } = useProductAll();

  if (isProductType(productAll)) {
    return (
      <div>
        <h2>This is product page</h2>
        <Grid container spacing={3}>
          {/* {console.log("Chi Giang" + productAll)}
          {productAll.map((product: ProductType) => {
            console.log("Day la" + product);
          })}}*/}

          {productAll.map((fakeItem: ProductType) => (
            <ProductCard
              key={fakeItem.name}
              _id={fakeItem._id}
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
  } else {
    return (
      <div>
        <p>Fetch data failed from the back end ...</p>
      </div>
    );
  }
};

export default ProductPage;
