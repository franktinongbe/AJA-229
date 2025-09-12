import React from "react";

const footerStyle = {
  backgroundColor: "#1f2937",
  color: "#f3f4f6",
  width: "100vw", // prend toute la largeur de la fenêtre
  margin: "0",
  padding: "0",
};

const partnerLogoStyle = {
  maxHeight: "60px",
  margin: "auto",
  filter: "grayscale(100%)",
  transition: "filter 0.3s",
};

const socialIconStyle = {
  color: "#f3f4f6",
  fontSize: "1.5rem",
  margin: "0 10px",
  transition: "color 0.3s",
};

const Footer = () => {
  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
        }
        footer {
          margin: 0 !important;
          padding: 0 !important;
        }
        footer a:hover {
          color: #fbbf24 !important;
        }
        .partner-logo:hover {
          filter: grayscale(0%);
        }
        .carousel {
          margin-bottom: 2rem !important;
        }
        .row {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      `}</style>

      <footer style={footerStyle}>
        <div className="container-fluid px-4 py-5">
          {/* Partenaires : Carrousel */}
          <h5 className="text-uppercase text-center fw-bold mb-4">
            Nos Partenaires
          </h5>
          <div
            id="partnerCarousel"
            className="carousel slide mb-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <img
                  src="https://i.pinimg.com/736x/d9/7a/e4/d97ae41683750486d6593f2c18ccd82c.jpg"
                  className="partner-logo d-block mx-auto"
                  alt="Partenaire 1"
                  style={partnerLogoStyle}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.pinimg.com/1200x/09/7e/f3/097ef3d09fc63758078eb7a3eba41b43.jpg"
                  className="partner-logo d-block mx-auto"
                  alt="Partenaire 2"
                  style={partnerLogoStyle}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.pinimg.com/736x/f8/d6/44/f8d64404d2ab779a058565ef53d90d19.jpg"
                  className="partner-logo d-block mx-auto"
                  alt="Partenaire 3"
                  style={partnerLogoStyle}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#partnerCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#partnerCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>

          {/* Colonnes */}
          <div className="row gx-5">
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold text-uppercase">Africa Job Agency</h5>
              <p>
                Votre plateforme de recrutement et formation professionnelle.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h6 className="fw-bold text-uppercase">Liens rapides</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-reset text-decoration-none">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="/service" className="text-reset text-decoration-none">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-reset text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-reset text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h6 className="fw-bold text-uppercase">Suivez-nous</h6>
              <div className="social-icons mb-3">
                <a href="#" style={socialIconStyle}>
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" style={socialIconStyle}>
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" style={socialIconStyle}>
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" style={socialIconStyle}>
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <p>
                <i className="bi bi-envelope me-2"></i> contacts@africajobagency.com
              </p>
              <p>
                <i className="bi bi-phone me-2"></i> +229 01 66 00 81 00
              </p>
            </div>
          </div>
        </div>

        <div className="text-center border-top border-secondary py-3">
          © 2025 Africa Job Agency — Tous droits réservés.
        </div>
      </footer>
    </>
  );
};

export default Footer;
