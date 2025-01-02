import React from "react";

import { Button } from "../atoms/Button";
import * as styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1>What are you waiting for?</h1>
        <Button>Shop now</Button>
      </div>
      <img src="/hero-image.svg" alt="image" />
    </section>
  );
};
