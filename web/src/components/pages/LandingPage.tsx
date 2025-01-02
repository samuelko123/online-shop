import React from "react";

import { Header } from "../molecules/Header";
import { HeroSection } from "../molecules/HeroSection";
import * as styles from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <HeroSection />
      </main>
    </>
  );
};
