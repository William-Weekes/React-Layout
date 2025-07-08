import React from "react";
import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import Social from "../components/Social.jsx";
import Pain from "../components/Pain.jsx";
import ThreeCards from "../components/threeCards.jsx";
import ValueRight from "../components/ValueRight.jsx";
import ValueLeft from "../components/ValueLeft.jsx";
import SocialTwo from "../components/SocialTwo.jsx";
import Benefits from "../components/Benefits.jsx";
import How from "../components/How.jsx";
import FAQ from "../components/FAQ.jsx";
import Final from "../components/Final.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Hero />
      <Social />
      <Pain />
      <ThreeCards />
      <ValueRight />
      <ValueLeft />
      <SocialTwo />
      <Benefits />
      <How />
      <Social />
      <FAQ />
      <Final />
      <Footer />
    </div>
  );
};

export default Home;
