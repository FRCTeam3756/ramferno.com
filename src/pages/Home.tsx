import { Hero } from '../components/Home/Hero/Hero';
import { Values } from '../components/Home/Values/Values';
import { Team } from '../components/Home/Team/Team';
import { Code } from '../components/Home/Code/Code';
import { Navbar } from '../components/Global/Navbar';
import { Footer } from '../components/Global/Footer';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Values />
      <Team />
      <Code />
      <Footer />
    </>
  );
};