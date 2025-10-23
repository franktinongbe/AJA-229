import React from "react";

const styles = {
  body: { backgroundColor: "#f9fafb" },
  blogCard: {
    background: "#fff",
    borderRadius: "1rem",
    overflow: "hidden",
    transition: "transform 0.3s, boxShadow 0.3s",
  },
  blogImg: { height: 200, objectFit: "cover", width: "100%" },
  blogContent: { padding: "1.5rem" },
  blogTitle: {
    color: "#4f46e5",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  meta: {
    fontSize: "0.9rem",
    color: "#6b7280",
    marginBottom: "1rem",
  },
  readMore: { textDecoration: "none", fontWeight: 500, color: "#4f46e5" },
};

const Blog = () => (
  <div style={styles.body}>
    {/* En-tête */}
    <section className="py-5 text-center bg-primary text-white">
      <div className="container">
        <h1 className="fw-bold">Notre Blog</h1>
        <p className="lead">
          Conseils carrière, tendances RH et actualités du recrutement.
        </p>
      </div>
    </section>

    {/* Barre de recherche */}
    <section className="py-4">
      <div className="container">
        <div className="input-group mx-auto" style={{ maxWidth: 500 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher un article..."
          />
          <button className="btn btn-primary">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </section>

    {/* Liste des articles */}
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {/* Article 1 */}
          <div className="col-md-4">
            <div className="blog-card" style={styles.blogCard}>
              <img
                src="https://via.placeholder.com/400x200?text=Article+1"
                alt="Article 1"
                style={styles.blogImg}
              />
              <div style={styles.blogContent}>
                <h5 style={styles.blogTitle}>5 conseils pour réussir votre entretien</h5>
                <p style={styles.meta}>
                  <i className="bi bi-calendar-event"></i> 10 Sept 2025 •{" "}
                  <i className="bi bi-person"></i> RH
                </p>
                <p>
                  Maximisez vos chances grâce à ces astuces pratiques pour
                  impressionner les recruteurs.
                </p>
                <a href="#" style={styles.readMore}>
                  Lire la suite →
                </a>
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="col-md-4">
            <div className="blog-card" style={styles.blogCard}>
              <img
                src="https://via.placeholder.com/400x200?text=Article+2"
                alt="Article 2"
                style={styles.blogImg}
              />
              <div style={styles.blogContent}>
                <h5 style={styles.blogTitle}>L’IA et le recrutement en 2025</h5>
                <p style={styles.meta}>
                  <i className="bi bi-calendar-event"></i> 25 Août 2025 •{" "}
                  <i className="bi bi-person"></i> RH
                </p>
                <p>
                  Découvrez comment l’intelligence artificielle transforme les
                  processus d’embauche.
                </p>
                <a href="#" style={styles.readMore}>
                  Lire la suite →
                </a>
              </div>
            </div>
          </div>

          {/* Article 3 */}
          <div className="col-md-4">
            <div className="blog-card" style={styles.blogCard}>
              <img
                src="https://via.placeholder.com/400x200?text=Article+3"
                alt="Article 3"
                style={styles.blogImg}
              />
              <div style={styles.blogContent}>
                <h5 style={styles.blogTitle}>Optimiser votre marque employeur</h5>
                <p style={styles.meta}>
                  <i className="bi bi-calendar-event"></i> 2 Août 2025 •{" "}
                  <i className="bi bi-person"></i> Com
                </p>
                <p>
                  Attirez les meilleurs talents en soignant votre image employeur
                  grâce à des stratégies efficaces.
                </p>
                <a href="#" style={styles.readMore}>
                  Lire la suite →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link">Précédent</a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Suivant
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </div>
);

export default Blog;
