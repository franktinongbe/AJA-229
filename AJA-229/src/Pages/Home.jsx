import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const style = `
  :root {
    --primary-color: #4f46e5;
    --secondary-color: #f59e0b;
  }

  .hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)),
                url('/image1.png') center/cover no-repeat fixed;
    color: white;
  }

  /* Animation d'entrée */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade { animation: fadeInUp 0.8s ease-out forwards; }

  /* Grille de logos en défilement infini */
  .logo-track {
    display: flex;
    width: calc(250px * 10);
    animation: scroll 20s linear infinite;
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-250px * 5)); }
  }

  .partner-logo {
    width: 200px;
    margin: 0 40px;
    filter: grayscale(100%);
    opacity: 0.6;
    transition: 0.3s;
  }
  .partner-logo:hover { filter: grayscale(0%); opacity: 1; transform: scale(1.1); }

  .stats-card {
    border: none;
    border-radius: 1.5rem;
    background: #ffffff;
    transition: all 0.3s ease;
  }
  .stats-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
  }

  .schedule-box {
    background: white;
    border-left: 5px solid var(--primary-color);
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .map-container {
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
`;

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f8fafc" }}>
      <style>{style}</style>

      {/* Hero Section */}
      <section className="hero">
        <Container className="text-center animate-fade">
          <h1 className="fw-extrabold display-3 mb-3">
            Propulsez votre <span style={{ color: 'var(--secondary-color)' }}>Carrière</span> en Afrique
          </h1>
          <p className="lead fs-4 mb-5 opacity-90 mx-auto" style={{ maxWidth: '800px' }}>
            Africa Job Agency : l'expertise du recrutement local alliée aux standards internationaux.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <Button href="/jobs" size="lg" className="px-5 py-3 border-0" style={{ backgroundColor: 'var(--secondary-color)', fontWeight: 'bold' }}>
              Consulter les offres
            </Button>
            <Button href="/contact" variant="outline-light" size="lg" className="px-5 py-3">
              Recruter un talent
            </Button>
          </div>
        </Container>
      </section>

      {/* Statistiques (Passées en haut pour crédibilité) */}
      <Container className="mt-n5 position-relative" style={{ zIndex: 10 }}>
        <Row className="g-4 justify-content-center">
          {[
            { icon: "people", val: "500+", label: "Placements", color: "#4f46e5" },
            { icon: "building", val: "120+", label: "Entreprises", color: "#10b981" },
            { icon: "award", val: "15", label: "Ans d'expertise", color: "#f59e0b" }
          ].map((stat, i) => (
            <Col md={3} key={i}>
              <Card className="stats-card shadow-sm py-4 text-center">
                <i className={`bi bi-${stat.icon} fs-1 mb-2`} style={{ color: stat.color }}></i>
                <h3 className="fw-bold mb-0">{stat.val}</h3>
                <small className="text-muted text-uppercase">{stat.label}</small>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Horaires & Infos */}
      <section className="py-5 mt-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">À votre service <span className="text-primary">partout au Bénin</span></h2>
              <p className="text-muted mb-4">Nous vous accueillons dans nos bureaux pour un accompagnement personnalisé de votre projet professionnel.</p>
              <div className="d-flex flex-column gap-3">
                <div className="schedule-box d-flex justify-content-between">
                  <span>Lundi - Vendredi</span>
                  <span className="fw-bold">08h00 - 18h00</span>
                </div>
                <div className="schedule-box d-flex justify-content-between">
                  <span>Samedi</span>
                  <span className="fw-bold">09h00 - 13h00</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..." // Remplacez par votre vrai lien embed
                  width="100%" height="400" loading="lazy" title="localisation"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partenaires (Marquee infini) */}
      <section className="py-5 bg-white border-top border-bottom overflow-hidden">
        <Container>
          <h5 className="text-center text-muted mb-5 text-uppercase" style={{ letterSpacing: '2px' }}>Ils nous font confiance</h5>
          <div className="logo-track">
            {/* Doubler les images pour l'effet infini */}
            {['logo1', 'logo2', 'logo1', 'logo2', 'logo1', 'logo1', 'logo2', 'logo1', 'logo2', 'logo1'].map((img, i) => (
              <img key={i} src={`/public/${img}.png`} className="partner-logo" alt="Partenaire" />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="py-5 bg-dark text-white text-center">
        <Container className="py-4">
          <h2 className="fw-bold mb-4">Prêt à franchir une nouvelle étape ?</h2>
          <div className="d-flex justify-content-center gap-4">
            <a href="https://wa.me/+22966008100" className="btn btn-success btn-lg px-4 rounded-pill">
              <i className="bi bi-whatsapp me-2"></i>WhatsApp
            </a>
            <a href="mailto:contact@aja.com" className="btn btn-outline-light btn-lg px-4 rounded-pill">
              <i className="bi bi-envelope me-2"></i>Email
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;