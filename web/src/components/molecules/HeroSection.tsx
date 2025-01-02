import React from "react";
import { Link } from "react-router";

import heroImageUrl from "../../assets/hero-image.svg";
import { Button } from "../atoms/Button";
import classes from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>What are you waiting for?</h1>
        <Button>
          <Link to="/products">Shop now</Link>
        </Button>
      </div>
      <img src={heroImageUrl} alt="image" />
    </section>
  );
};
