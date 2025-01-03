import React from "react";

import { PRODUCTS } from "../../data/products";
import { Header } from "../molecules/Header";
import { ProductList } from "../molecules/ProductList";
import classes from "./ProductListingPage.module.css";

export const ProductListingPage = () => {
  return (
    <>
      <Header />
      <main className={classes.container}>
        <h1>Products</h1>
        <ProductList products={PRODUCTS} />
      </main>
    </>
  );
};
