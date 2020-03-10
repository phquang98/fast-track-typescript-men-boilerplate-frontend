import { useState, useEffect } from "react";
import { ProductType, useProductAllType } from "../types/personalType";

// Helper function

export const useProductAll: useProductAllType = () => {
  const url = "http://localhost:3000/api/v1/products/all";
  const [productAll, setProductAll] = useState<ProductType[]>();

  const fetchProductAll: () => Promise<void | ProductType[]> = () => {
    return fetch(url)
      .then(data => data.json())
      .then(data => setProductAll(data));
  };

  useEffect(() => {
    fetchProductAll();
  }, []);

  return { productAll };
};
