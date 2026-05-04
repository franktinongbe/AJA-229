import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const style = `
:root {
  --primary-color: #4f46e5;
  --secondary-color: #f59e0b;
}

/* HERO */
.hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at top right, rgba(79,70,229,0.4), transparent),
    radial-gradient(circle at bottom left, rgba(245,158,11,0.3), transparent),
    url('/image1.png') center/cover no-repeat;
  color: white;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  backdrop-filter: blur(6px);
  background: rgba(15, 23, 42, 0.6);
}

/* BUTTON */
.btn-glow {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  border: none;
  box-shadow: 0 0 15px rgba(245,158,11,0.6);
  transition: 0.3s;
}

.btn-glow:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 0 25px rgba(245,158,11,0.9);
}

/* ANIMATION */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade { animation: fadeInUp 0.8s ease-out forwards; }

/* STATS */
.stats-card {
  border: none;
  border-radius: 1.5rem;
  background: linear-gradient(145deg, #ffffff, #f1f5f9);
  transition: all 0.4s ease;
}

.stats-card:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}

/* CTA SECTION */
.cta-section {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  position: relative;
}

.cta-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(79,70,229,0.3), transparent);
}

/* SCHEDULE */
.schedule-box {
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  border-left: 6px solid var(--primary-color);
  padding: 1.5rem;
  border-radius: 1rem;
  transition: 0.3s;
}

.schedule-box:hover {
  transform: translateX(5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
}

/* CONTACT CARD */
.contact-card {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  transition: 0.3s;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.contact-item i {
  font-size: 1.5rem;
  color: var(--secondary-color);
}

.contact-item p {
  margin: 0;
  opacity: 0.8;
}

/* PARTNERS */
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
  width: 180px;
  margin: 0 30px;
  filter: grayscale(100%) blur(1px);
  opacity: 0.5;
  transition: 0.4s;
}

.partner-logo:hover {
  filter: grayscale(0%) blur(0);
  opacity: 1;
  transform: scale(1.15);
}
`;

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f8fafc" }}>
      <style>{style}</style>

      {/* HERO */}
      <section className="hero">
        <Container className="text-center animate-fade position-relative">
          <h1 className="fw-extrabold display-3 mb-3">
            Propulsez votre <span style={{ color: 'var(--secondary-color)' }}>Carrière</span> en Afrique
          </h1>
          <p className="lead fs-4 mb-5 opacity-90 mx-auto" style={{ maxWidth: '800px' }}>
            Africa Job Agency : l'expertise du recrutement local alliée aux standards internationaux.
          </p>

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <Button href="/jobs" size="lg" className="px-5 py-3 btn-glow fw-bold">
              Consulter les offres
            </Button>
            <Button href="/contact" variant="outline-light" size="lg" className="px-5 py-3">
              Recruter un talent
            </Button>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <Container className="mt-n5 position-relative" style={{ zIndex: 10 }}>
        <Row className="g-4 justify-content-center">
          {[
            { icon: "people", val: "500+", label: "Placements", color: "#4f46e5" },
            { icon: "building", val: "120+", label: "Entreprises", color: "#10b981" },
            { icon: "award", val: "15", label: "Ans d'expertise", color: "#f59e0b" }
          ].map((stat, i) => (
            <Col md={3} key={i}>
              <Card className="stats-card shadow-sm py-4 text-center animate-fade" style={{animationDelay: `${i * 0.2}s`}}>
                <i className={`bi bi-${stat.icon} fs-1 mb-2`} style={{ color: stat.color }}></i>
                <h3 className="fw-bold mb-0">{stat.val}</h3>
                <small className="text-muted text-uppercase">{stat.label}</small>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CONTACT + HORAIRES */}
      <section className="py-5 text-white text-center cta-section position-relative">
        <Container className="py-4 position-relative">
          <Row className="align-items-center">

            <Col lg={6} className="mb-4 mb-lg-0 text-start">
              <h2 className="fw-bold mb-4">
                À votre service <span className="text-warning">partout au Bénin</span>
              </h2>

              <p className="mb-4 opacity-75">
                Nous vous accompagnons dans votre projet professionnel avec un suivi personnalisé.
              </p>

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
              <div className="contact-card p-4">
                <h4 className="fw-bold mb-4">Nos coordonnées</h4>

                <div className="contact-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div>
                    <strong>Adresse</strong>
                    <p>Cotonou, Bénin</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <strong>Téléphone</strong>
                    <p>+229 01 55 67 45 45</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <strong>Email</strong>
                    <p>contact@africajobagency.com</p>
                  </div>
                </div>

                <div className="d-flex gap-3 mt-4">
                  <a href="https://wa.me/+2290155674545" className="btn btn-success flex-fill">
                    <i className="bi bi-whatsapp"></i> WhatsApp
                  </a>

                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-outline-light flex-fill">
                    <i className="bi bi-map"></i> Localiser
                  </a>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* PARTENAIRES */}
      <section className="py-5 bg-white border-top border-bottom overflow-hidden">
        <Container>
          <h5 className="text-center text-muted mb-5 text-uppercase" style={{ letterSpacing: '2px' }}>
            Ils nous font confiance
          </h5>

          <div className="logo-track">
            {['logo1', 'logo2', 'logo1', 'logo2', 'logo1', 'logo1', 'logo2', 'logo1', 'logo2', 'logo1']
              .map((img, i) => (
                <img key={i} src={`/${img}.png`} className="partner-logo" alt="Partenaire" />
              ))}
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-5 bg-dark text-white text-center">
        <Container className="py-4">
          <h2 className="fw-bold mb-4">Prêt à franchir une nouvelle étape ?</h2>

          <div className="d-flex justify-content-center gap-4">
            <a href="https://wa.me/+2290155674545" className="btn btn-success btn-lg px-4 rounded-pill">
              <i className="bi bi-whatsapp me-2"></i>WhatsApp
            </a>

            <a href="mailto:contact@africajobagency.com" className="btn btn-outline-light btn-lg px-4 rounded-pill">
              <i className="bi bi-envelope me-2"></i>Email
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;