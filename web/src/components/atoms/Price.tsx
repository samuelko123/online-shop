import React from "react";

import classes from "./Price.module.css";

const formatter = new Intl.NumberFormat("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const Price = ({
  value,
}: {
  value: number,
}) => {
  return (
    <p className={classes.value}>${formatter.format(value)}</p>
  );
};
