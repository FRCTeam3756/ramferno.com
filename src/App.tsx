import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SmoothScroll from "./components/Global/SmoothScroll/SmoothScroll";

import './styles.css';

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Robots = lazy(() => import("./pages/Robots/Robots"));
const Outreach = lazy(() => import("./pages/Outreach/Outreach"));
const Sponsorship = lazy(() => import("./pages/Sponsorship/Sponsorship"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/robots" element={<Robots />} />
            <Route path="/outreach" element={<Outreach />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </SmoothScroll>
    </Router>
  );
}
