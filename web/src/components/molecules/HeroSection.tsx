import React from "react";

import heroImageUrl from "../../assets/hero-image.svg";
import { ButtonLink } from "./ButtonLink";
import classes from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>What are you waiting for?</h1>
        <ButtonLink href="/products">Shop now</ButtonLink>
      </div>
      <img src={heroImageUrl} alt="image" />
    </section>
  );
};
