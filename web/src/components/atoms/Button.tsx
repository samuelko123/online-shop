import React, { ReactNode } from "react";

import * as styles from "./Button.module.css";

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
};
