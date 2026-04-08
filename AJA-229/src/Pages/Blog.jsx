import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner, Alert } from "react-bootstrap";
import axios from "axios";

const styles = {
  body: { backgroundColor: "#f4f7f6", minHeight: "100vh" },
  jobCard: {
    background: "#fff",
    borderRadius: "1.2rem",
    border: "none",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: { padding: "1.8rem", flexGrow: 1 },
  jobTitle: {
    color: "#4f46e5",
    fontWeight: 700,
    fontSize: "1.25rem",
    marginBottom: "0.5rem",
  },
  badge: {
    fontSize: "0.75rem",
    padding: "0.5rem 1rem",
    borderRadius: "2rem",
    backgroundColor: "#eef2ff",
    color: "#4f46e5",
    fontWeight: 600,
    display: "inline-block",
    marginBottom: "1rem"
  },
  meta: {
    fontSize: "0.9rem",
    color: "#6b7280",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "1rem",
  },
  applyBtn: {
    textDecoration: "none",
    fontWeight: 600,
    color: "#fff",
    backgroundColor: "#4f46e5",
    padding: "0.8rem 1.5rem",
    borderRadius: "0.8rem",
    display: "inline-block",
    textAlign: "center",
    transition: "background 0.3s"
  },
};

const OffresList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        // Remplacez par votre URL API réelle
        const response = await axios.get("http://votre-api.com/api/jobs");
        setJobs(response.data);
      } catch (err) {
        setError("Impossible de charger les offres d'emploi.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Filtrage des offres selon la recherche
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.body}>
      {/* En-tête */}
      <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h1 className="fw-bold text-white">Nos Offres d'Emploi</h1>
          <p className="lead opacity-75">
            Trouvez l'opportunité qui correspond à vos ambitions.
          </p>
        </div>
      </section>

      {/* Barre de recherche */}
      <section className="py-4 mt-n4">
        <div className="container">
          <div className="input-group mx-auto shadow-sm" style={{ maxWidth: 600 }}>
            <span className="input-group-text bg-white border-0 ps-3">
              <i className="bi bi-search text-muted"></i>
            </span>
            <input
              type="text"
              className="form-control border-0 py-3"
              placeholder="Poste, ville ou compétence..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Liste des Offres */}
      <section className="py-5">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
              <p className="mt-3 text-muted">Recherche des meilleures opportunités...</p>
            </div>
          ) : error ? (
            <Alert variant="danger" className="text-center">{error}</Alert>
          ) : (
            <div className="row g-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div className="col-md-4" key={job.id}>
                    <div className="job-card" style={styles.jobCard}>
                      <div style={styles.cardContent}>
                        <span style={styles.badge}>{job.type}</span>
                        <h5 style={styles.jobTitle}>{job.title}</h5>
                        
                        <div style={styles.meta}>
                          <span><i className="bi bi-geo-alt"></i> {job.location}</span>
                        </div>
                        
                        <p className="text-muted small mb-4">
                          {job.description.substring(0, 120)}...
                        </p>

                        <Link to={`/offres/${job.id}`} style={styles.applyBtn} className="w-100">
                          Voir l'offre
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-5">
                  <p className="text-muted">Aucune offre ne correspond à votre recherche.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default OffresList;