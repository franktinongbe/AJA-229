import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // On écoute l'événement qui dit que le site est prêt à être installé
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("L'utilisateur a installé l'app");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <>
      <style>{`
        body { margin: 0; padding: 0; }
        .navbar-custom {
          width: 100%;
          background: linear-gradient(90deg, #1d1d1fff, #1c0577ff);
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        .navbar-brand, .nav-link, .btn-custom, .btn-download {
          color: #fff !important;
          transition: color 0.3s ease;
        }
        .navbar-brand img { height: 60px; width: auto; }
        .btn-custom {
          background-color: #fbbf24;
          border: none;
          font-weight: 500;
        }
        .btn-custom:hover { background-color: #f59e0b; }
        
        /* Style spécifique pour le bouton télécharger */
        .btn-download {
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid #fbbf24;
          font-weight: 500;
          margin-right: 10px;
        }
        .btn-download:hover {
          background-color: #fbbf24;
          color: #1c0577ff !important;
        }

        .navbar-toggler { border: none; outline: none; }
        .navbar-toggler-icon {
          position: relative;
          display: block;
          width: 24px;
          height: 2px;
          background-color: #fff;
        }
        .navbar-toggler-icon::before, .navbar-toggler-icon::after {
          content: "";
          position: absolute;
          width: 24px;
          height: 2px;
          background-color: #fff;
          left: 0;
        }
        .navbar-toggler-icon::before { top: -6px; }
        .navbar-toggler-icon::after { top: 6px; }

        @media (max-width: 991px) {
          .navbar-collapse {
            background-color: #111827;
            border-radius: 0.5rem;
            padding: 1rem;
          }
          .navbar-nav .nav-link {
            color: #fbbf24 !important;
            text-align: center;
            background-color: rgba(255,255,255,0.05);
            margin-bottom: 0.5rem;
          }
          .btn-custom, .btn-download {
            display: block;
            width: 100%;
            margin-top: 0.5rem;
            text-align: center;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-custom shadow fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
            <img src="/favicon.ico" alt="Logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav me-3">
              <li className="nav-item"><a className="nav-link" href="/">Accueil</a></li>
              <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="/blog">Blogs</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>

            <div className="d-lg-flex align-items-center">
              {/* Le bouton s'affiche uniquement si l'installation est possible */}
              {deferredPrompt && (
                <button 
                  onClick={handleInstallClick}
                  className="btn btn-download rounded-pill px-3 mb-2 mb-lg-0"
                >
                  📲 Installer l'App
                </button>
              )}
              
              <a href="/register" className="btn btn-custom rounded-pill px-4">
                S&apos;inscrire
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div style={{ height: "70px" }}></div>
    </>
  );
};

export default Navbar;