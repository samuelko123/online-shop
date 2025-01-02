import React from "react";

import { Header } from "../molecules/Header";
import { HeroSection } from "../molecules/HeroSection";
import classes from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <main className={classes.container}>
        <HeroSection />
      </main>
    </>
  );
};
