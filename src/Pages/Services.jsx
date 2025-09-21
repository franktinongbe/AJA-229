import React from "react";
import { useNavigate } from "react-router-dom";

const style = `
  body {
    background-color: #f9fafb;
  }
  .service-card {
    background: #fff;
    border-radius: 1rem;
    padding: 2rem;
    transition: transform 0.3s, box-shadow 0.3s;
    text-align: center;
    cursor: pointer;
  }
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  .service-icon {
    font-size: 2.5rem;
    color: #4f46e5;
    margin-bottom: 1rem;
  }
  h2.section-title {
    font-weight: 700;
    color: #111827;
    margin-bottom: 2rem;
  }
`;

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "bi bi-people-fill",
      title: "Recrutement",
      description:
        "Nous vous aidons à trouver les meilleurs talents et à évaluer leurs compétences pour un recrutement efficace et durable.",
      link: "/recrutement",
    },
    {
      icon: "bi bi-mortarboard-fill",
      title: "Formations et Team building",
      description:
        "Nous apportons aux entreprises des solutions efficaces en termes de recrutement et de formation, en garantissant un suivi des candidats et un accompagnement personnalisé.",
      link: "/formation",
    },
    {
      icon: "bi bi-briefcase-fill",
      title: "Gestion de Paie",
      description:
        "La formation et la bonne gestion du personnel sont essentielles pour s’adapter aux évolutions des entreprises.",
      link: "/paie",
    },
    {
      icon: "bi bi-megaphone-fill",
      title: "Intérim",
      description:
        "Nous vous accompagnons dans la promotion de votre marque employeur et la communication efficace de vos offres.",
      link: "/interim",
    },
    {
      icon: "bi bi-people",
      title: "Conseils et Assistance RH",
      description:
        "Renforcez la cohésion et la motivation de vos équipes grâce à des séminaires et activités de team building dynamiques.",
      link: "/conseil",
    },

     {
      icon: "bi bi-people",
      title: "Offres d'Emploi",
      description:
        "nos offres d'emplois, fiables et constructrices.",
      link: "/offres",
    },
  ];

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

      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center">Nos Services</h2>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  className="service-card"
                  onClick={() => navigate(service.link)}
                >
                  <i className={`${service.icon} service-icon`}></i>
                  <h5 className="fw-bold mb-3">{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
