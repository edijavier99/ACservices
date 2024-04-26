import React from "react";
import { IntroductionBoard } from "../components/introduction";
import { Services } from "../components/services";
import { Reviews } from "../components/reviews";
import { Footer } from "../components/footer";
import "../styles/home.css"
import { FAQ } from "../components/faq";

export const Home = () => {
  return (
    <section>
          <IntroductionBoard />
          <Services />
          <Reviews/>
          <FAQ/>
          <Footer/>
    </section>
  );
};
