import React from "react";

import { Header } from "../molecules/Header";
import * as styles from "./ProductListingPage.module.css";

export const ProductListingPage = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <p>Products will be coming soon.</p>
      </main>
    </>
  );
};
