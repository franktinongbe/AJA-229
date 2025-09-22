// src/pages/Home.jsx
import React from "react";

const style = `
  body { background-color: #f9fafb; scroll-behavior: smooth; }

  .hero {
    position: relative;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url('/image1.png') center center / cover no-repeat;
    color: white;
    padding: 140px 0;
    overflow: hidden;
    background-attachment: fixed;
    animation: fadeIn 1.5s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero h1, .hero p { position: relative; z-index: 2; }

  .btn-modern {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .btn-modern::before {
    content: "";
    position: absolute;
    background: rgba(255,255,255,0.3);
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: height 0.3s ease;
  }
  .btn-modern:hover::before { height: 100%; }

  .partner-logo {
    max-height: 80px;
    margin: 15px;
    transition: transform 0.3s, filter 0.3s;
    filter: grayscale(40%);
  }
  .partner-logo:hover { transform: scale(1.1); filter: grayscale(0%); }

  .stats-card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s;
  }
  .stats-card:hover { transform: translateY(-5px); }

  .testimonials {
    background: linear-gradient(135deg, #f0f4ff, #e6ebff);
    padding: 60px 0;
  }
  .testimonial-card {
    background: white;
    border-radius: 1rem;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
  }
  .testimonial-card:hover { transform: translateY(-5px); }

  iframe {
    border: 0;
    width: 100%;
    height: 350px;
    border-radius: 1rem;
  }

  .scroll-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #0d6efd;
    color: white;
    border-radius: 50%;
    padding: 10px 15px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    transition: transform 0.3s;
    z-index: 999;
  }
  .scroll-top:hover { transform: scale(1.1); }
`;

const Home = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
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
            <a href="/contact" className="btn btn-primary btn-lg btn-modern">
              Contactez-nous
            </a>
            <a href="/jobs" className="btn btn-warning btn-lg text-dark fw-bold btn-modern">
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
          <div className="mt-3">
            <a href="#contact" className="btn btn-outline-primary">
              Prendre Rendez-vous
            </a>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Nos Partenaires</h2>
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <img src="/public/ANPE.png" className="partner-logo" alt="ANPE" />
            <img src="/public/CEB.png" className="partner-logo" alt="CEB" />
            <img src="/public/VOITH.png" className="partner-logo" alt="VOITH" />
            <img src="/public/GOLF.png" className="partner-logo" alt="GOLF" />
            <img src="/public/DONGA.png" className="partner-logo" alt="DONGA" />
            <img src="/public/IMT.png" className="partner-logo" alt="IMT" />
            <img src="/public/SONI.png" className="partner-logo" alt="SONI" />
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

      {/* Témoignages */}
      <section className="testimonials text-center">
        <div className="container">
          <h2 className="fw-bold mb-5">Ils nous font confiance</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>"Grâce à Africa Job Agency, j’ai trouvé un emploi en un mois seulement !"</p>
                <h6 className="fw-bold mt-3">– Mariam K.</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>"Un partenaire fiable qui comprend nos besoins en recrutement."</p>
                <h6 className="fw-bold mt-3">– CEB</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>"Un service rapide et professionnel, je recommande vivement."</p>
                <h6 className="fw-bold mt-3">– Patrick D.</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-5 bg-primary text-white" id="contact">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Nous Contacter</h2>
          <p>Discutez avec nous via vos canaux préférés :</p>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a href="https://wa.me/+22955338835" target="_blank" rel="noopener noreferrer" className="btn btn-light">
              <i className="bi bi-whatsapp text-success"></i> WhatsApp
            </a>
            <a href="mailto:admin@africajobagency.bj" className="btn btn-light">
              <i className="bi bi-envelope text-danger"></i> Email
            </a>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Notre Situation Géographique</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.530243958669!2d2.4226311151232436!3d6.384983295256829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1025372ed7c04c3f%3A0x0!2sVedoko%2C%20Cotonou%2C%20Bénin!5e0!3m2!1sfr!2sfr!4v1694430030845"
            allowFullScreen=""
            loading="lazy"
            title="Notre Situation Géographique"
          ></iframe>
        </div>
      </section>

      {/* Bouton retour en haut */}
      <div className="scroll-top" onClick={scrollToTop}>
        <i className="bi bi-arrow-up"></i>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Home;
