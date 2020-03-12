import { useState, useEffect } from "react";

import { ProductType, useProductType } from "../types/personalType";

// Hook wrapper for /api/v1/products/ endpoint
export const useProduct: useProductType = (idOfProduct: string) => {
  const url = "http://localhost:3000/api/v1/products/";
  const [productAll, setProductAll] = useState<ProductType[]>();
  const [product, setProduct] = useState<ProductType>();

  // Helper func for /api/v1/products/all
  const fetchProductAll: () => Promise<void | ProductType[]> = () => {
    return fetch(url + "all")
      .then(data => data.json())
      .then(data => setProductAll(data));
  };

  // Helper func for /api/v1/products/:productId
  const fetchProductWithId: (arg1: string) => Promise<void | ProductType> = idOfProduct => {
    return fetch(url + idOfProduct)
      .then(data => data.json())
      .then(data => setProduct(data));
  };

  // Helper func for /api/v1/products/filter/:searchPhrase

  useEffect(() => {
    fetchProductAll();
  }, []);

  useEffect(() => {
    fetchProductWithId(idOfProduct);
  }, [idOfProduct]);

  return { productAll, product };
};
