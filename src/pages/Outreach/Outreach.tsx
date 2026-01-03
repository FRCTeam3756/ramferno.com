import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";

import { Helmet } from "@vuer-ai/react-helmet-async";
import InProgress from "../../components/InProgress/InProgress";

export default function Outreach() {
  return (
    <>
      <Helmet>
        <title>Outreach | RamFerno Robotics</title>
        <meta name="description" content="Explore how Team 3756 RamFerno engages the community through STEM programs, workshops, and public events." />
      </Helmet>
      <NavMenu />
      <InProgress />
      <Footer />
    </>
  );
}
