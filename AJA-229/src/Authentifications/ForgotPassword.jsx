import React from "react";

const style = {
  page: {
    background: "linear-gradient(135deg, #4f46e5, #9333ea)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  card: {
    background: "#fff",
    borderRadius: "1rem",
    padding: "2rem",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#4f46e5",
  },
  btn: {
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    padding: "0.5rem 2rem",
    fontWeight: "500",
    transition: "background-color 0.3s",
  },
};

function ForgotPassword() {
  return (
    <div style={style.page}>
      <div style={style.card}>
        <h2 style={style.title}>Mot de passe oublié</h2>
        <p className="text-muted mb-4">
          Entrez votre adresse email pour recevoir un lien de réinitialisation.
        </p>
        <form>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Votre adresse email"
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={style.btn}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#4338ca")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4f46e5")}
          >
            Envoyer le lien
          </button>
        </form>
        <div className="mt-4">
          <a href="/login" className="text-decoration-none fw-bold" style={{ color: "#4f46e5" }}>
            Retour à la connexion
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
