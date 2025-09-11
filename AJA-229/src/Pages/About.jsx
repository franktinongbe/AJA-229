import React, { useEffect } from "react";

// Import Bootstrap and Bootstrap Icons in your index.html or via npm/yarn in your project
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const styles = `
body { background-color: #f9fafb; }
.about-hero {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('https://via.placeholder.com/1600x500?text=A+Propos+Hero') center/cover no-repeat;
  color: white; padding: 120px 0;
}
/* Timeline */
.timeline {
  position: relative;
  margin: 2rem 0;
  padding: 0;
  list-style: none;
}
.timeline::before {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  width: 4px;
  background: #4f46e5;
  transform: translateX(-50%);
}
.timeline-item {
  position: relative;
  width: 50%;
  padding: 1rem 2rem;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}
.timeline-item.visible {
  opacity: 1;
  transform: translateY(0);
}
.timeline-item::before {
  content: '';
  position: absolute;
  top: 1rem;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: #4f46e5;
  border: 3px solid #fff;
  z-index: 1;
}
.timeline-item.left { left: 0; text-align: right; }
.timeline-item.left::before { right: -10px; }
.timeline-item.right { left: 50%; }
.timeline-item.right::before { left: -10px; }
@media (max-width: 768px) {
  .timeline::before { left: 8px; }
  .timeline-item { width: 100%; padding-left: 2.5rem; text-align: left !important; }
  .timeline-item.left, .timeline-item.right { left: 0; }
  .timeline-item::before { left: 0; right: auto; }
}
/* Icones et équipe */
.icon-box, .team-img { transition: transform 0.3s, box-shadow 0.3s; }
.icon-box:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); }
.team-img { border-radius: 50%; width: 120px; height: 120px; object-fit: cover; }
.team-img:hover { transform: scale(1.05); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
`;

const About = () => {
  useEffect(() => {
    // Intersection Observer pour l'animation des timeline items
    const items = document.querySelectorAll('.timeline-item');
    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>
      {/* Hero */}
      <section className="about-hero text-center">
        <div className="container">
          <h1 className="fw-bold display-4">À propos de RecrutPro</h1>
          <p className="lead">Nous connectons les talents et les entreprises pour bâtir un avenir professionnel solide.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Notre Parcours</h2>
          <ul className="timeline">
            <li className="timeline-item left">
              <h5 className="fw-bold">2008 – Fondation</h5>
              <p>Lancement de RecrutPro avec la vision de connecter les talents aux entreprises.</p>
            </li>
            <li className="timeline-item right">
              <h5 className="fw-bold">2013 – Expansion Nationale</h5>
              <p>Ouverture de nouveaux bureaux et partenariats avec des entreprises leaders.</p>
            </li>
            <li className="timeline-item left">
              <h5 className="fw-bold">2017 – Innovation Digitale</h5>
              <p>Introduction de solutions de recrutement en ligne et d’évaluations automatisées.</p>
            </li>
            <li className="timeline-item right">
              <h5 className="fw-bold">2022 – Présence Internationale</h5>
              <p>Implantation dans plusieurs pays pour accompagner des clients internationaux.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Nos Valeurs</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="icon-box bg-white rounded-4 p-4 shadow-sm">
                <i className="bi bi-heart fs-1 text-primary"></i>
                <h5 className="fw-bold mt-3">Passion</h5>
                <p>Nous connectons les talents avec passion et engagement.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box bg-white rounded-4 p-4 shadow-sm">
                <i className="bi bi-shield-check fs-1 text-success"></i>
                <h5 className="fw-bold mt-3">Intégrité</h5>
                <p>Nous respectons des standards élevés d’éthique et de transparence.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box bg-white rounded-4 p-4 shadow-sm">
                <i className="bi bi-lightbulb fs-1 text-warning"></i>
                <h5 className="fw-bold mt-3">Innovation</h5>
                <p>Nous adoptons des outils modernes pour améliorer le processus RH.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Notre Équipe</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <img src="https://via.placeholder.com/150" alt="Membre 1" className="team-img shadow" />
              <h6 className="fw-bold mt-2">Sophie Martin</h6>
              <p>Directrice Générale</p>
            </div>
            <div className="col-md-3">
              <img src="https://via.placeholder.com/150" alt="Membre 2" className="team-img shadow" />
              <h6 className="fw-bold mt-2">David Morel</h6>
              <p>Responsable RH</p>
            </div>
            <div className="col-md-3">
              <img src="https://via.placeholder.com/150" alt="Membre 3" className="team-img shadow" />
              <h6 className="fw-bold mt-2">Claire Dupont</h6>
              <p>Consultante Recrutement</p>
            </div>
            <div className="col-md-3">
              <img src="https://via.placeholder.com/150" alt="Membre 4" className="team-img shadow" />
              <h6 className="fw-bold mt-2">Julien Bernard</h6>
              <p>Chargé Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Prêt à collaborer avec nous ?</h2>
          <p>Contactez notre équipe pour transformer vos projets RH en succès.</p>
          <a href="contact.html" className="btn btn-light btn-lg mt-3">
            <i className="bi bi-envelope"></i> Contactez-nous
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
