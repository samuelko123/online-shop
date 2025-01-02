import React from "react";

import { Logo } from "../atoms/Logo";
import * as styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <a href="/" className={styles.link}>
        <Logo />
        <span>Online Shop</span>
      </a>
    </header>
  );
};
