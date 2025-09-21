import React from "react";

const style = `
  body { background-color: #f9fafb; }
  .job-card {
    background: #fff;
    border-radius: 1rem;
    padding: 1.5rem;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .job-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
  .job-title { color: #4f46e5; font-weight: 600; }
  .apply-btn { background-color: #4f46e5; color: #fff; border-radius: 30px; padding: 0.4rem 1.2rem; }
  .apply-btn:hover { background-color: #4338ca; }
  .filter-bar select { border-radius: 30px; }
`;

const Jobs = () => {
  React.useEffect(() => {
    // Dynamically load Bootstrap and Bootstrap Icons CSS
    const bootstrapLink = document.createElement("link");
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    document.head.appendChild(bootstrapLink);

    const iconsLink = document.createElement("link");
    iconsLink.rel = "stylesheet";
    iconsLink.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css";
    document.head.appendChild(iconsLink);

    // Dynamically load Bootstrap JS
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(bootstrapLink);
      document.head.removeChild(iconsLink);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>{style}</style>
      {/* En-tête */}
      <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h1 className="fw-bold">Nos Offres d’Emploi</h1>
          <p className="lead">Filtrez et trouvez rapidement le poste qui vous correspond.</p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-4">
        <div className="container">
          <div className="row g-3 filter-bar justify-content-center">
            <div className="col-md-3">
              <select className="form-select" defaultValue="Ville">
                <option>Ville</option>
                <option>Paris</option>
                <option>Lyon</option>
                <option>Marseille</option>
                <option>Lille</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select" defaultValue="Type de contrat">
                <option>Type de contrat</option>
                <option>CDI</option>
                <option>CDD</option>
                <option>Stage</option>
                <option>Freelance</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select" defaultValue="Domaine">
                <option>Domaine</option>
                <option>Informatique</option>
                <option>RH</option>
                <option>Communication</option>
                <option>Administration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des offres */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Offre */}
            <div className="col-md-6 col-lg-4">
              <div className="job-card">
                <h5 className="job-title">Développeur Web Full-Stack</h5>
                <p className="text-muted"><i className="bi bi-geo-alt"></i> Paris, France</p>
                <p>Participez au développement d’applications web performantes dans une entreprise innovante.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">CDI • Temps plein</span>
                  <button className="apply-btn btn" data-bs-toggle="modal" data-bs-target="#applyModal">Postuler</button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="job-card">
                <h5 className="job-title">Chargé de Communication</h5>
                <p className="text-muted"><i className="bi bi-geo-alt"></i> Marseille, France</p>
                <p>Animez la communication interne et externe pour renforcer l’image de l’entreprise.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">Stage • 6 mois</span>
                  <button className="apply-btn btn" data-bs-toggle="modal" data-bs-target="#applyModal">Postuler</button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="job-card">
                <h5 className="job-title">Consultant RH</h5>
                <p className="text-muted"><i className="bi bi-geo-alt"></i> Lyon, France</p>
                <p>Accompagnez nos clients dans l’optimisation de leur stratégie de ressources humaines.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">Freelance</span>
                  <button className="apply-btn btn" data-bs-toggle="modal" data-bs-target="#applyModal">Postuler</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de candidature */}
      <div className="modal fade" id="applyModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Postuler à l’offre</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nom complet</label>
                  <input type="text" className="form-control" id="name" placeholder="Votre nom" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Adresse email</label>
                  <input type="email" className="form-control" id="email" placeholder="Votre email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="cv" className="form-label">CV</label>
                  <input type="file" className="form-control" id="cv" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Votre message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Envoyer la candidature</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
