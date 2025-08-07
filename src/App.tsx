import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import AboutPage from "./pages/about-page/about-page";
import ContactPage from "./pages/contact-page/contact-page";
import ExperiencePage from "./pages/experience-page/experience-page";
import HomePage from "./pages/home-page/home-page";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
