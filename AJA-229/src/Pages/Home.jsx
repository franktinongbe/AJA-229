import React from "react";

const style = `
  body { background-color: #f9fafb; }

  .hero {
    position: relative;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url('/PDG.png') center center / cover no-repeat;
    color: white;
    padding: 140px 0;
    overflow: hidden;
    background-attachment: fixed; /* effet parallaxe */
  }

  /* Rendre le hero adaptable sur mobile */
  @media (max-width: 768px) {
    .hero {
      background-attachment: scroll; /* désactive le parallaxe sur mobile */
      padding: 100px 0;
      background-position: center top;
    }
  }

  .hero h1, .hero p {
    position: relative;
    z-index: 2;
  }

  .partner-logo {
    max-height: 60px;
    filter: grayscale(100%);
    transition: filter 0.3s;
  }
  .partner-logo:hover { filter: grayscale(0%); }

  .stats-card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  iframe {
    border: 0;
    width: 100%;
    height: 350px;
    border-radius: 1rem;
  }
`;

const Home = () => (
  <>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
    />
    <style>{style}</style>

    {/* Hero */}
    <section className="hero text-center">
      <div className="container">
        <h1 className="fw-bold display-4">Bienvenue à Africa Job Agency</h1>
        <p className="lead">
          Votre partenaire pour le recrutement, la formation et la gestion des talents.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
          <a href="/contact" className="btn btn-primary btn-lg">
            Contactez-nous
          </a>
          <a href="/jobs" className="btn btn-warning btn-lg text-dark fw-bold">
            <i className="bi bi-briefcase"></i> Postulez maintenant
          </a>
        </div>
      </div>
    </section>

    {/* Horaires */}
    <section className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Nos Horaires</h2>
        <p>Lundi - Vendredi : 8h00 - 18h00</p>
        <p>Samedi : 9h00 - 13h00</p>
        <p>Dimanche : Fermé</p>
      </div>
    </section>

    {/* Partenaires */}
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">Nos Partenaires</h2>
        <div id="carouselPartenaires" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/public/logo1.png" className="partner-logo mx-3" alt="Partenaire 1" />
              <img src="/public/logo2.png" className="partner-logo mx-3" alt="Partenaire 2" />
              <img src="/public/logo2.png" className="partner-logo mx-3" alt="Partenaire 3" />
            </div>
            <div className="carousel-item">
              <img src="/public/logo2.png" className="partner-logo mx-3" alt="Partenaire 4" />
              <img src="/public/logo2.png" className="partner-logo mx-3" alt="Partenaire 5" />
              <img src="/public/logo2.png" className="partner-logo mx-3" alt="Partenaire 6" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselPartenaires" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselPartenaires" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>

    {/* Statistiques */}
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">Nos Statistiques</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="stats-card">
              <i className="bi bi-people fs-1 text-primary"></i>
              <h3 className="fw-bold mt-3">500+</h3>
              <p>Candidats placés</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-card">
              <i className="bi bi-building fs-1 text-success"></i>
              <h3 className="fw-bold mt-3">120+</h3>
              <p>Entreprises partenaires</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-card">
              <i className="bi bi-award fs-1 text-warning"></i>
              <h3 className="fw-bold mt-3">15</h3>
              <p>Années d’expérience</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-card">
              <i className="bi bi-briefcase fs-1 text-danger"></i>
              <h3 className="fw-bold mt-3">300+</h3>
              <p>Offres gérées</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact rapide */}
    <section className="py-5 bg-primary text-white" id="contact">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Nous Contacter</h2>
        <p>Discutez avec nous via vos canaux préférés :</p>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="https://wa.me/+22966008100" target="_blank" rel="noopener noreferrer" className="btn btn-light">
            <i className="bi bi-whatsapp text-success"></i> WhatsApp
          </a>
          <a href="https://m.me/votrepage" target="_blank" rel="noopener noreferrer" className="btn btn-light">
            <i className="bi bi-messenger text-primary"></i> Messenger
          </a>
          <a href="mailto:contact@monsite.com" className="btn btn-light">
            <i className="bi bi-envelope text-danger"></i> Email
          </a>
        </div>
      </div>
    </section>

    {/* Situation géographique */}
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Notre Situation Géographique</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999048854016!2d2.292292615674486!3d48.85837307928744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd8e39f38d%3A0x40b82c3688c9460!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1694430030845!"
          allowFullScreen=""
          loading="lazy"
          title="Notre Situation Géographique"
        ></iframe>
      </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  </>
);

export default Home;
