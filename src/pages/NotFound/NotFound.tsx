import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";

import { Helmet } from "@vuer-ai/react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found | RamFerno Robotics</title>
        <meta name="description" content="Page Not Found - Error 404" />
      </Helmet>
      <NavMenu />
      <Footer />
    </>
  );
}
