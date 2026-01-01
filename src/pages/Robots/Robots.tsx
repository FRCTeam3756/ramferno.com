import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";
import Header from "../../components/Robots/Header/Header";
import RobotCards from "../../components/Robots/RobotCards/RobotCards";

import { Helmet } from "@vuer-ai/react-helmet-async";

export default function Robots() {
  return (
    <>
      <Helmet>
        <title>Robots | RamFerno Robotics</title>
        <meta name="description" content="Learn about the robots designed, built, and competed by Team RamFerno over the years." />
      </Helmet>
      <NavMenu />
      <Header />
      <RobotCards />
      <Footer />
    </>
  );
}
