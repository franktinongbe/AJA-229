import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { lazy, Suspense } from "react"; // Ajout de lazy et Suspense
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// --- COMPOSANTS FIXES (chargés immédiatement car visibles partout) ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";


// --- PAGES EN LAZY LOADING (chargées uniquement quand on y va) ---
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const Jobs = lazy(() => import("./Pages/Jobs"));
const Blog = lazy(() => import("./Pages/Blog"));
const Contact = lazy(() => import("./Pages/Contact"));
const Register = lazy(() => import("./Authentifications/Register"));
const Login = lazy(() => import("./Authentifications/Login"));
const ForgotPassword = lazy(() => import("./Authentifications/ForgotPassword"));
const Interim = lazy(() => import("./Pages/Interim"));
const Gestion_de_Paie = lazy(() => import("./Pages/Gestion_de_Paie"));
const Formations = lazy(() => import("./Pages/Formations"));
const RH = lazy(() => import("./Pages/RH"));
const ModalRendezVous = lazy(() => import("./components/ModalRendezVous"));
const Profil = lazy(() => import("./Pages/Profil"));
const Offres = lazy(() => import("./Pages/offres"));
const AjoutOffre = lazy(() => import("./Pages/AjoutOffre"));
const Recrutement = lazy(() => import("./Pages/Recrutement"));
const UserDashboard = lazy(() => import("./Pages/DashboardUser"));
const Feedback = lazy(() => import("./Pages/Feedback"));

function Layout({ children }) {
  const location = useLocation();
  const hideLayout = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <Sidebar />}
      <main>{children}</main> {/* Petit wrapper sémantique */}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        {/* Le Suspense affiche un message ou un spinner pendant que la page charge */}
        <Suspense fallback={
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/ajout" element={<AjoutOffre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/interim" element={<Interim />} />
            <Route path="/paie" element={<Gestion_de_Paie />} />
            <Route path="/formation" element={<Formations />} />
            <Route path="/conseil" element={<RH />} />
            <Route path="/recrutement" element={<Recrutement />} />
            <Route path="/rendez-vous" element={<ModalRendezVous />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;