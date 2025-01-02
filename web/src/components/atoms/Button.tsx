import React, { ReactNode } from "react";

import classes from "./Button.module.css";

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className={classes.button}>
      {children}
    </button>
  );
};
