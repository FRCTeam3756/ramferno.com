import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";

import { Helmet } from "@vuer-ai/react-helmet-async";

export default function Competition() {
  return (
    <>
      <Helmet>
        <title>Competition | RamFerno Robotics</title>
        <meta name="description" content="Competitive history, championship results, and awards earned by RamFerno Robotics." />
      </Helmet>
      <NavMenu />
      <Footer />
    </>
  );
}
