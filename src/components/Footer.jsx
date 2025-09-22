import React from "react";

const footerStyle = {
  backgroundColor: "#031c3fff",
  color: "#f3f4f6",
  width: "100vw",
  margin: "0",
  padding: "0",
};

const partnerLogoStyle = {
  maxHeight: "60px",
  margin: "auto",
  transition: "transform 0.3s",
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
        /* Les logos gardent leur couleur réelle */
        .partner-logo {
          filter: none !important;
        }
        .partner-logo:hover {
          transform: scale(1.1);
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
          <h5 className="text-uppercase text-center fw-bold mb-4">
            Nos Partenaires
          </h5>
          <div
            id="partnerCarousel"
            className="carousel slide mb-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner text-center">
              {[
                "/GOLF.png",
                "/ANPE.png",
                "/CEB.png",
                "/DONGA.png",
                "/IMT.png",
                "/VOITH.png",
                "/SONI.png",
              ].map((src, index) => (
                <div
                  key={src}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={src}
                    className="partner-logo d-block mx-auto"
                    alt={`Partenaire ${index + 1}`}
                    style={partnerLogoStyle}
                  />
                </div>
              ))}
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
                {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
                  <a href="#" key={icon} style={socialIconStyle}>
                    <i className={`bi bi-${icon}`}></i>
                  </a>
                ))}
              </div>
              <p>
                <i className="bi bi-envelope me-2"></i> admin@africajobagency.bj
              </p>
              <p>
                <i className="bi bi-phone me-2"></i> +229 01 55 67 45 45 / 01 52
                51 47 47
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
