import React from "react";

const Navbar = () => (
  <>
    <style>{`
      body {
        margin: 0;
        padding: 0;
      }
      .navbar-custom {
        width: 100%;
        background: linear-gradient(90deg, #4f46e5, #9333ea);
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
      .navbar-brand, .nav-link, .btn-custom {
        color: #fff !important;
        transition: color 0.3s ease;
      }
      .nav-link:hover, .navbar-brand:hover {
        color: #e0e7ff !important;
      }
      .btn-custom {
        background-color: #fbbf24;
        border: none;
        font-weight: 500;
        transition: background-color 0.3s ease;
      }
      .btn-custom:hover {
        background-color: #f59e0b;
      }
      .navbar-toggler {
        border: none;
        outline: none;
      }
      .navbar-toggler:focus {
        box-shadow: none;
      }
      .navbar-toggler-icon {
        position: relative;
        display: block;
        width: 24px;
        height: 2px;
        background-color: #fff;
        transition: all 0.3s ease;
      }
      .navbar-toggler-icon::before,
      .navbar-toggler-icon::after {
        content: "";
        position: absolute;
        width: 24px;
        height: 2px;
        background-color: #fff;
        left: 0;
        transition: all 0.3s ease;
      }
      .navbar-toggler-icon::before {
        top: -6px;
      }
      .navbar-toggler-icon::after {
        top: 6px;
      }
      /* Style du menu déroulant */
      @media (max-width: 991px) {
        .navbar-collapse {
          background-color: #4f46e5;
          border-radius: 0.5rem;
          padding: 1rem;
        }
        .navbar-nav .nav-link {
          padding: 0.75rem 1rem;
          border-radius: 0.25rem;
          margin-bottom: 0.5rem;
          text-align: center;
          background-color: rgba(255,255,255,0.1);
        }
        .navbar-nav .nav-link:hover {
          background-color: rgba(255,255,255,0.2);
        }
        .btn-custom {
          display: block;
          width: 100%;
          text-align: center;
          margin-top: 0.5rem;
        }
      }
    `}</style>
    <nav className="navbar navbar-expand-lg navbar-custom shadow fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">MonLogo</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <a className="nav-link active" href="/">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          <a href="/register" className="btn btn-custom rounded-pill px-3">
            S&apos;inscrire
          </a>
        </div>
      </div>
    </nav>
    <div style={{ height: "70px" }}></div>
  </>
);

export default Navbar;
