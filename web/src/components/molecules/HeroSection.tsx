import React from "react";
import { Link } from "react-router";

import { Button } from "../atoms/Button";
import * as styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1>What are you waiting for?</h1>
        <Button>
          <Link to="/products">Shop now</Link>
        </Button>
      </div>
      <img src="/assets/hero-image.svg" alt="image" />
    </section>
  );
};
