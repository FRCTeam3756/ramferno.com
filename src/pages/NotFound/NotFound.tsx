import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";

import styles from './NotFound.module.css'

import { Helmet } from "@vuer-ai/react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found | RamFerno Robotics</title>
        <meta name="description" content="Page Not Found - Error 404" />
      </Helmet>
      <NavMenu />
      <main className={styles.content}>
        <h1 className={styles.header}>404</h1>

        <p className={styles.description}>
          This page doesn’t exist or has been moved.
        </p>

        <a href="/" className={styles.returnLink}>
          Go home
        </a>
      </main>
      <Footer />
    </>
  );
}
