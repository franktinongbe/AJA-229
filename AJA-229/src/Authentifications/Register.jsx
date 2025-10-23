// src/pages/Register.jsx
import React from "react";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#f9fafb",
  },
  left: {
    flex: 1,
    background: "linear-gradient(135deg, #4f46e5, #9333ea)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    textAlign: "center",
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  registerCard: {
    width: "100%",
    maxWidth: "400px",
    background: "#fff",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
};

export default function Register() {
  return (
    <div style={styles.container}>
      {/* Section gauche */}
      <div style={styles.left}>
        <h1 className="fw-bold mb-3">Bienvenue</h1>
        <p className="lead">
          Rejoignez notre plateforme pour accéder aux meilleures opportunités.
        </p>
        <i
          className="bi bi-people-fill"
          style={{ fontSize: "4rem", opacity: 0.9 }}
        ></i>
      </div>

      {/* Section droite */}
      <div style={styles.right}>
        <div style={styles.registerCard}>
          <h2 className="fw-bold text-center mb-4">Créer un compte</h2>
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
              <label className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                placeholder="Votre mot de passe"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirmez le mot de passe</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirmez votre mot de passe"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              S&apos;inscrire
            </button>
          </form>

          <p className="text-center mt-3">
            Déjà un compte ? <a href="/login">Se connecter</a>
          </p>
        </div>
      </div>
    </div>
  );
}
