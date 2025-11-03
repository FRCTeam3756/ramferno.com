import Hero from '../../components/Home/Hero/Hero';
import Team from '../../components/Home/Team/Team';
import Values from '../../components/Home/Values/Values';
import NavMenu from '../../components/Global/NavMenu/NavMenu';
import Footer from '../../components/Global/Footer/Footer';

export default function Home() {
  return (
    <> 
      <NavMenu />
      <Hero />
      <Team />
      <Values />
      <Footer />
    </>
  );
};