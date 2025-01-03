import React from "react";

import { Product } from "../../types/Product";
import { Price } from "../atoms/Price";
import classes from "./ProductTile.module.css";

export const ProductTile = ({
  product,
}: {
  product: Product
}) => {
  const {
    name,
    price,
    image,
  } = product;

  return (
    <li className={classes.container}>
      <img className={classes.image} src={image.src} alt="product image" />
      <div className={classes.detail}>
        <p className={classes.name}>{name}</p>
        <Price value={price} />
      </div>
    </li>
  );
};
