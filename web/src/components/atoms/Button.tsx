import React from "react";

import classes from "./Button.module.css";

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={classes.button} {...props} />
  );
};
