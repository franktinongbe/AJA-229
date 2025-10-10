import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Jobs from "./Pages/Jobs";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Register from "./Authentifications/Register";
import Login from "./Authentifications/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ForgotPassword from "./Authentifications/ForgotPassword";
import Interim from "./Pages/Interim";
import Gestion_de_Paie from "./Pages/Gestion_de_Paie";
import Formations from "./Pages/Formations";
import RH from "./Pages/RH";
import ModalRendezVous from "./components/ModalRendezVous";
import Profil from "./Pages/Profil";
import Offres from "./Pages/offres";
import AjoutOffre from "./Pages/AjoutOffre";
import JobDetailPage from "./Pages/JobDetailPage";
import Sidebar from "./components/Sidebar";
import Recrutement from "./Pages/Recrutement";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import UserDashboard from "./Pages/DashboardUser";
import Feedback from "./Pages/Feedback";

function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <Sidebar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
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
          <Route path="/offres/:id" element={<JobDetailPage />} />
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
      </Layout>
    </Router>
  );
}

export default App;
