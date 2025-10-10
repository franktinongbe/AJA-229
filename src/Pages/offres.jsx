// Pages/Offres.jsx (Anciennement Jobs)
import React from "react";
import { Link } from "react-router-dom"; // Import Link pour naviguer vers la page de détail
import jobs from "./Jobs"; // Importez les données des offres d'emploi
import { JobsContext } from "../context/JobsContext";
const style = `
  body { background-color: #f9fafb; }
  .job-card {
    background: #fff;
    border-radius: 1rem;
    padding: 1.5rem;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%; /* Assure une hauteur uniforme pour les cartes */
    text-decoration: none; /* Enlève la décoration du lien */
    color: inherit;
    display: flex;
    flex-direction: column;
  }
  .job-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
  .job-title { color: #4f46e5; font-weight: 600; }
  .apply-btn { 
    background-color: #4f46e5; 
    color: #fff; 
    border-radius: 30px; 
    padding: 0.4rem 1.2rem; 
    text-decoration: none; /* Pour que le Link ressemble à un bouton */
  }
  .apply-btn:hover { background-color: #4338ca; }
  .filter-bar select { border-radius: 30px; }
`;

const Offres = () => {
  // J'ai retiré le useEffect pour le chargement dynamique de Bootstrap,
  // car il est déjà chargé globalement dans votre App.jsx
  
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

      {/* Filtres (laissé statique pour l'exemple) */}
      <section className="py-4">
        <div className="container">
          <div className="row g-3 filter-bar justify-content-center">
            {/* ... Vos sélecteurs de filtre ... */}
          </div>
        </div>
      </section>

      {/* Liste des offres générée dynamiquement */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {jobs.map((job) => (
              <div key={job.id} className="col-md-6 col-lg-4">
                {/* La carte entière est un lien vers la page de détail */}
                <Link to={`/offres/${job.id}`} className="job-card">
                  <h5 className="job-title">{job.title}</h5>
                  <p className="text-muted"><i className="bi bi-geo-alt"></i> {job.location}</p>
                  <p>{job.description}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="text-muted">{job.type} • {job.contractDetail}</span>
                    {/* Le bouton "Postuler" redirige vers la page de détail */}
                    <span className="apply-btn btn">Détail</span> 
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* J'ai retiré la Modal statique pour la remplacer par la page de détail */}
    </>
  );
};

export default Offres;