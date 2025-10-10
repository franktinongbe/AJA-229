// src/components/Sidebar.js
import React, { useState, useEffect } from "react";
import { Button, Toast, ToastContainer, Image } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaTachometerAlt,
  FaTags,
  FaPlusSquare,
  FaBlog,
  FaArrowLeft,
  FaBars,
  FaInfoCircle,
  FaQuestionCircle,
  FaComments,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [offsetTop, setOffsetTop] = useState(56);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user")) || {
    nom: "Utilisateur",
    email: "exemple@mail.com",
    photo: "",
  };

  useEffect(() => {
    const getNavbarHeight = () => {
      const nb =
        document.querySelector(".navbar") ||
        document.querySelector("#navbar") ||
        document.querySelector("[data-navbar]");
      setOffsetTop((nb?.offsetHeight || 56) + 8);
    };
    getNavbarHeight();
    window.addEventListener("resize", getNavbarHeight);
    return () => window.removeEventListener("resize", getNavbarHeight);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setShowToast(true);
    setTimeout(() => navigate("/"), 2000);
  };

  const goToProfile = () => {
    closeSidebar();
    navigate("/profil");
  };

  // Icônes mieux adaptées
  const mainPages = [
    { name: "Tableau de bord", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "Offres", icon: <FaTags />, path: "/offres" },
    { name: "AjoutOffre", icon: <FaTags />, path: "/ajout" },
    { name: "JobDetail", icon: <FaPlusSquare />, path:"/offres/:id"  },
    { name: "Blog", icon: <FaBlog />, path: "/blog" },
  ];

  const extraPages = [
    { name: "Profil", icon: <FaUserCircle />, path: "/profil" },
    { name: "À propos", icon: <FaInfoCircle />, path: "/about" },
    { name: "Aide", icon: <FaQuestionCircle />, path: "/aide" },
    { name: "Feedback", icon: <FaComments />, path: "/feedback" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Bouton hamburger */}
      {!isOpen && (
        <div
          style={{
            position: "fixed",
            top: `${offsetTop}px`,
            left: "15px",
            zIndex: 1040,
          }}
        >
          <Button
            style={{ backgroundColor: "#1b263b", borderColor: "#1b263b" }}
            onClick={toggleSidebar}
            className="rounded-circle p-2 d-flex align-items-center justify-content-center"
            aria-label="Ouvrir le menu"
          >
            <FaBars style={{ color: "#fff", fontSize: "20px" }} />
          </Button>
        </div>
      )}

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: `${offsetTop}px`,
          left: isOpen ? 0 : "-270px",
          zIndex: 1035,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
          backgroundColor: "#1b263b",
          width: "270px",
          color: "#fff",
          height: `calc(100vh - ${offsetTop}px)`,
          overflowY: "auto",
          transition: "left 0.4s ease",
        }}
      >
        <div style={{ padding: "15px", position: "relative" }}>
          {/* Bouton fermer */}
          <Button
            onClick={toggleSidebar}
            className="rounded-circle p-2 d-flex align-items-center justify-content-center"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#1b263b",
              borderColor: "#fff",
            }}
            aria-label="Fermer le menu"
          >
            <FaArrowLeft style={{ color: "#fff", fontSize: "18px" }} />
          </Button>

          {/* Profil utilisateur */}
          <div
            className="d-flex align-items-center mb-4 mt-3"
            style={{ cursor: "pointer" }}
            onClick={goToProfile}
          >
            {user?.photo ? (
              <Image
                src={user.photo}
                roundedCircle
                width="40"
                height="40"
                className="me-2 border border-light"
                alt="Profil"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
            ) : (
              <FaUserCircle size={40} className="me-2 text-white" />
            )}
            <div>
              <strong>{user?.nom}</strong>
              <p className="mb-0 small">{user?.email}</p>
            </div>
          </div>

          {/* Liens principaux */}
          <ul className="list-unstyled">
            {mainPages.map((page) => (
              <li key={page.path} className="mb-2">
                <Link
                  to={page.path}
                  className="btn w-100 d-flex align-items-center text-white"
                  style={{
                    gap: "10px",
                    backgroundColor: isActive(page.path)
                      ? "#27AE60"
                      : "#1b263b",
                    border: "1px solid #fff",
                  }}
                  onClick={closeSidebar}
                >
                  {page.icon} {page.name}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="border-light" />

          {/* Liens secondaires */}
          <ul className="list-unstyled">
            {extraPages.map((page) => (
              <li key={page.path} className="mb-2">
                <Link
                  to={page.path}
                  className="btn w-100 d-flex align-items-center"
                  style={{
                    gap: "10px",
                    color: isActive(page.path) ? "#fff" : "#1b263b",
                    backgroundColor: isActive(page.path) ? "#1b263b" : "#fff",
                    borderColor: "#1b263b",
                  }}
                  onClick={closeSidebar}
                >
                  {page.icon} {page.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Déconnexion */}
          <div className="mt-4">
            <Button
              style={{ backgroundColor: "#e63946", borderColor: "#e63946" }}
              className="w-100 d-flex align-items-center justify-content-center"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="me-2" /> Déconnexion
            </Button>
          </div>
        </div>
      </div>

      {/* Toast */}
      <ToastContainer position="top-center" className="mt-3">
        <Toast
          bg="success"
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={2000}
          autohide
        >
          <Toast.Body className="text-white">Déconnexion réussie</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Sidebar;
