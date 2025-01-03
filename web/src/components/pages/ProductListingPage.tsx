import React from "react";

import { PRODUCTS } from "../../data/products";
import { Header } from "../molecules/Header";
import { ProductTile } from "../molecules/ProductTile";
import classes from "./ProductListingPage.module.css";

export const ProductListingPage = () => {
  return (
    <>
      <Header />
      <main className={classes.container}>
        <h1>Products</h1>
        <ul className={classes["product-list"]}>
          <ProductTile product={PRODUCTS[0]} />
          <ProductTile product={PRODUCTS[1]} />
          <ProductTile product={PRODUCTS[2]} />
          <ProductTile product={PRODUCTS[3]} />
          <ProductTile product={PRODUCTS[4]} />
          <ProductTile product={PRODUCTS[5]} />
          <ProductTile product={PRODUCTS[6]} />
        </ul>
      </main>
    </>
  );
};
