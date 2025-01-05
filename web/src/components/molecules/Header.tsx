import React from "react";
import { Link } from "react-router";

import { Logo } from "../atoms/Logo";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.container}>
      <Link to="/" className={classes.link}>
        <Logo />
        <span>Online Shop</span>
      </Link>
    </header>
  );
};
