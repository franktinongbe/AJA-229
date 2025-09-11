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
  loginCard: {
    width: "100%",
    maxWidth: "400px",
    background: "#fff",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  socialBtn: {
    width: "100%",
    marginBottom: "10px",
  },
};

const Login = () => (
  <div style={styles.container}>
    {/* Partie gauche */}
    <div style={styles.left}>
      <h1 className="fw-bold mb-3">Heureux de vous revoir !</h1>
      <p className="lead">
        Connectez-vous pour accéder à votre compte et découvrir nos nouveautés.
      </p>
      <i className="bi bi-box-arrow-in-right" style={{ fontSize: "4rem", opacity: 0.9 }}></i>
    </div>

    {/* Partie droite */}
    <div style={styles.right}>
      <div style={styles.loginCard}>
        <h2 className="fw-bold text-center mb-4">Se connecter</h2>
        <form>
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
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Connexion
          </button>
        </form>

        <div className="text-center text-muted mb-2">ou connectez-vous avec</div>
        <button className="btn btn-outline-danger" style={styles.socialBtn}>
          <i className="bi bi-google"></i> Google
        </button>
        <button className="btn btn-outline-primary" style={styles.socialBtn}>
          <i className="bi bi-facebook"></i> Facebook
        </button>
        <button className="btn btn-outline-info" style={styles.socialBtn}>
          <i className="bi bi-linkedin"></i> LinkedIn
        </button>

        <p className="text-center mt-3">
          <a href="/forgotPassword">Mot de passe oublié ?</a>
        </p>
        <p className="text-center">
          Pas encore de compte ? <a href="/register">Créer un compte</a>
        </p>
      </div>
    </div>
  </div>
);

export default Login;
