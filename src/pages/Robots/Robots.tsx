import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";
import Header from "../../components/Robots/Header/Header";
import Projects from "../../components/Robots/Projects/Projects";

import { Helmet } from "@vuer-ai/react-helmet-async";

export default function Robots() {
  return (
    <>
      <Helmet>
        <title>Our Robots | RamFerno Robotics</title>
        <meta name="description" content="Learn about the robots designed, built, and competed by Team RamFerno over the years." />
      </Helmet>
      <NavMenu />
      <Header />
      <Projects />
      <Footer />
    </>
  );
}
