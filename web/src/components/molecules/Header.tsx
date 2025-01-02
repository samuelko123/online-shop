import React from "react";

import { Logo } from "../atoms/Logo";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.container}>
      <a href="/" className={classes.link}>
        <Logo />
        <span>Online Shop</span>
      </a>
    </header>
  );
};
