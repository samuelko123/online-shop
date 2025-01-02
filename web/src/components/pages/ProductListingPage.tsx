import React from "react";

import { Header } from "../molecules/Header";
import classes from "./ProductListingPage.module.css";

export const ProductListingPage = () => {
  return (
    <>
      <Header />
      <main className={classes.container}>
        <p>Products will be coming soon.</p>
      </main>
    </>
  );
};
