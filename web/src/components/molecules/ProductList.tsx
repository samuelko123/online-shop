import React from "react";

import { Product } from "../../types/Product";
import classes from "./ProductList.module.css";
import { ProductTile } from "./ProductTile";

export const ProductList = ({
  products,
}: {
  products: Product[]
}) => {
  return (
    <ul className={classes.list}>
      {
        products.map(product => (
          <li key={product.id}>
            <ProductTile product={product} />
          </li>
        ))
      }
    </ul>
  );
};
