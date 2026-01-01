import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";

import { Helmet } from "@vuer-ai/react-helmet-async";

export default function Sponsorship() {
  return (
    <>
      <Helmet>
        <title>Sponsorship | RamFerno Robotics</title>
        <meta name="description" content="Partner with RamFerno Robotics — see sponsor benefits and how to support our STEM initiatives." />
      </Helmet>
      <NavMenu />
      <Footer />
    </>
  );
}
