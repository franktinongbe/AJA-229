import React from "react";

const style = {
  body: { backgroundColor: "#f9fafb" },
  header: {
    background: "linear-gradient(135deg, #4f46e5, #4338ca)",
    color: "#fff",
    padding: "4rem 1rem",
    textAlign: "center",
  },
  contactCard: {
    background: "#fff",
    borderRadius: "1rem",
    padding: "2rem",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  icon: {
    fontSize: "2.8rem",
    marginBottom: "1rem",
  },
  btnWhatsApp: {
    backgroundColor: "#25D366", // Vert WhatsApp
    color: "#fff",
    borderRadius: "30px",
    padding: "0.5rem 1.5rem",
    transition: "background-color 0.3s",
  },
  btnMessenger: {
    backgroundColor: "#4f46e5", // Bleu par défaut
    color: "#fff",
    borderRadius: "30px",
    padding: "0.5rem 1.5rem",
  },
  btnMail: {
    backgroundColor: "#dc3545", // Rouge pour email
    color: "#fff",
    borderRadius: "30px",
    padding: "0.5rem 1.5rem",
    transition: "background-color 0.3s",
  },
  formCard: {
    background: "#fff",
    borderRadius: "1rem",
    padding: "2rem",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  },
};

function Contact() {
  const contacts = [
    {
      icon: "bi bi-whatsapp",
      title: "WhatsApp",
      text: "Discutez instantanément avec nous via WhatsApp.",
      link: "https://wa.me/55338835",
      btn: "Envoyer un message",
      btnStyle: style.btnWhatsApp,
      hover: "#1ebe5c",
    },
    {
      icon: "bi bi-messenger",
      title: "Messenger",
      text: "Contactez-nous directement sur Facebook Messenger.",
      link: "https://m.me/Africa Job Agency",
      btn: "Ouvrir Messenger",
      btnStyle: style.btnMessenger,
      hover: "#3b36c2",
    },
    {
      icon: "bi bi-envelope",
      title: "Email",
      text: "Envoyez-nous un mail pour toute demande ou information.",
      link: "mailto:contacts@africajobagency.com",
      btn: "Envoyer un mail",
      btnStyle: style.btnMail,
      hover: "#b52a38",
    },
  ];

  return (
    <div style={style.body}>
      {/* Hero */}
      <header style={style.header}>
        <h1 className="fw-bold">Contactez-nous</h1>
        <p className="lead mb-0">
          Une question ou un projet ? Nous serons ravis de vous répondre rapidement.
        </p>
      </header>

      {/* Moyens de contact */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 mb-5">
            {contacts.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="contact-card h-100"
                  style={style.contactCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.05)";
                  }}
                >
                  <i className={item.icon} style={{ ...style.icon, color: item.btnStyle.backgroundColor }}></i>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p>{item.text}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={item.btnStyle}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = item.hover)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor =
                        item.btnStyle.backgroundColor)
                    }
                  >
                    {item.btn}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={style.formCard}>
                <h3 className="fw-bold text-center mb-4">Formulaire de Contact</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Votre email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Sujet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Sujet du message"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Votre message..."
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn px-5"
                      style={style.btnMessenger}
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
