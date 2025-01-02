import React from "react";

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
          <ProductTile
            name="Something Good For Your Ears And Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            price={1.23}
            image={{
              src: "/assets/product.png",
            }}
          />
          <ProductTile
            name="Something Good For You"
            price={1234.2}
            image={{
              src: "/assets/product.png",
            }}
          />
          <ProductTile
            name="Some Kind Of Earphone"
            price={249}
            image={{
              src: "/assets/product.png",
            }}
          />
          <ProductTile
            name="Some Kind Of Earphone"
            price={249}
            image={{
              src: "/assets/product.png",
            }}
          />
          <ProductTile
            name="Some Kind Of Earphone"
            price={249}
            image={{
              src: "/assets/product.png",
            }}
          />
          <ProductTile
            name="Some Kind Of Earphone"
            price={249}
            image={{
              src: "/assets/product.png",
            }}
          />
          <ProductTile
            name="Some Kind Of Earphone"
            price={249}
            image={{
              src: "/assets/product.png",
            }}
          />
        </ul>
      </main>
    </>
  );
};
