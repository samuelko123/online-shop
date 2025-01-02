import React from "react";

import { Price } from "../atoms/Price";
import classes from "./ProductTile.module.css";

export const ProductTile = ({
  name,
  price,
  image,
}: {
  name: string,
  price: number,
  image: {
    src: string,
  }
}) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={image.src} alt="product image" />
      <div className={classes.detail}>
        <p className={classes.name}>{name}</p>
        <Price value={price} />
      </div>
    </div>
  );
};
