import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Robots from "./pages/Robots/Robots";
import Competition from "./pages/Competition/Competition";
import Outreach from "./pages/Outreach/Outreach";
import Sponsorship from "./pages/Sponsorship/Sponsorship";
import NotFound from "./pages/NotFound/NotFound";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robots" element={<Robots />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
