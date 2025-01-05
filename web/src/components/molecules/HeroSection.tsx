import React from "react";
import { useNavigate } from "react-router";

import heroImageUrl from "../../assets/hero-image.svg";
import { Button } from "../atoms/Button";
import classes from "./HeroSection.module.css";

export const HeroSection = () => {
  const nagivate = useNavigate();

  return (
    <section className={classes.container}>
      <div>
        <h1>What are you waiting for?</h1>
        <Button onClick={() => nagivate("/products")}>Shop now</Button>
      </div>
      <img src={heroImageUrl} alt="image" />
    </section>
  );
};
