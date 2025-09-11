import React, { useState } from "react";

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
  const [selectedService, setSelectedService] = useState("");
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      icon: "bi bi-people-fill",
      title: "Recrutement et Évaluation du Personnel",
      description:
        "Nous vous aidons à trouver les meilleurs talents et à évaluer leurs compétences pour un recrutement efficace et durable.",
    },
    {
      icon: "bi bi-mortarboard-fill",
      title: "Formations",
      description:
        "Des formations professionnelles adaptées à vos équipes pour développer leurs compétences et booster leur performance.",
    },
    {
      icon: "bi bi-briefcase-fill",
      title: "Conseil en Gestion RH",
      description:
        "Optimisez votre gestion des ressources humaines grâce à nos conseils stratégiques et opérationnels sur mesure.",
    },
    {
      icon: "bi bi-megaphone-fill",
      title: "Communication et Publicité",
      description:
        "Nous vous accompagnons dans la promotion de votre marque employeur et la communication efficace de vos offres.",
    },
    {
      icon: "bi bi-people",
      title: "Séminaire d'Entreprise et Team Building",
      description:
        "Renforcez la cohésion et la motivation de vos équipes grâce à des séminaires et activités de team building dynamiques.",
    },
  ];

  const openModal = (title) => {
    setSelectedService(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService("");
  };

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
                  onClick={() => openModal(service.title)}
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

      {/* Modal Formulaire */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">
                  Prendre Rendez-vous : {selectedService}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nom complet</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Votre email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date du rendez-vous</label>
                    <input type="date" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Services;
