import Hero from '../../components/Home/Hero/Hero';
import Values from '../../components/Home/Values/Values';
import NavMenu from '../../components/Global/NavMenu/NavMenu';
import Footer from '../../components/Global/Footer/Footer';

import { Helmet } from '@vuer-ai/react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | RamFerno Robotics</title>
        <meta name="description" content="RamFerno Robotics is one of over 1000 Canadian FIRST Robotics teams. Team RamFerno competes and parades with robots every year." />
      </Helmet>
      <NavMenu />
      <Hero />
      <Values />
      <Footer />
    </>
  );
};