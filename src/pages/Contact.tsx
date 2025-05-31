import { Icons } from "../components/Contact/Icons/Icons";
import { Navbar } from "../components/Global/Navbar";
import { Footer } from "../components/Global/Footer";
import globalStyles from "../styles/global.module.css";

export const Contact = () => {
  return (
    <section className={globalStyles.section} id="contact">
      <Navbar />
      <div className={globalStyles.container}>
        <header className={globalStyles.sectionHeader}>
          <h1>Contact</h1>
          <h2>Contact</h2>
        </header>

        <Icons />
      </div>
      <Footer />
    </section>
  );
};
