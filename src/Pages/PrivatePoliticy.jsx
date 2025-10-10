// src/pages/PrivacyPolicy.js
import React from "react";
import { Container } from "react-bootstrap";

export default function PrivacyPolicy() {
  const title = "Politique de Confidentialité";
  const lastUpdate = "Dernière mise à jour : Octobre 2025";

  const sections = [
    {
      title: "1. Introduction",
      text: "Africa Job Agency respecte la vie privée de ses utilisateurs et s’engage à protéger leurs informations personnelles. Cette politique explique quelles données nous collectons, comment elles sont utilisées et les droits dont vous disposez. L’utilisation de l’application implique votre consentement à cette politique."
    },
    {
      title: "2. Informations collectées",
      textList: [
        "Données personnelles : nom, email, numéro de téléphone, informations de compte.",
        "Données d’utilisation : interactions avec l’application et l'administrateur, historique des actions, transactions.",
        "Données techniques : appareil, version du système d’exploitation, logs et données de performance."
      ]
    },
    {
      title: "3. Utilisation des informations",
      textList: [
        "Fournir, maintenir et améliorer le service.",
        "Analyser l’utilisation et optimiser l’expérience utilisateur.",
        "Communiquer avec les utilisateurs pour assistance ou notifications importantes."
      ]
    },
    {
      title: "4. Partage des informations",
      textList: [
        "Les données ne sont jamais vendues à des tiers.",
        "Elles peuvent être partagées uniquement avec des partenaires de confiance pour le fonctionnement de l’application ou si la loi l’exige."
      ]
    },
    {
      title: "5. Sécurité des données",
      text: "Africa Job Agency met en place des mesures techniques et organisationnelles strictes pour protéger vos données, y compris le cryptage et des sauvegardes régulières."
    },
    {
      title: "6. Droits des utilisateurs",
      text: "Vous pouvez accéder, corriger ou supprimer vos données à tout moment via les paramètres de l’application ou en contactant notre support."
    },
    {
      title: "7. Cookies et technologies similaires",
      text: "Des cookies peuvent être utilisés pour améliorer l’expérience utilisateur et analyser les performances de l’application."
    },
    {
      title: "8. Limitation de responsabilité",
      text: "Africa Job Agency ne peut être tenu responsable des pertes directes ou indirectes liées à l’utilisation de l’application, y compris en cas d’erreur ou d’omission dans le traitement des données."
    },
    {
      title: "9. Modifications de la politique",
      text: "Cette politique peut être mise à jour. Les utilisateurs seront informés des changements via l’application. Les versions précédentes seront archivées pour référence."
    },
    {
      title: "10. Contact",
      text: "Pour toute question relative à vos données personnelles, contactez-nous à :",
      email: "admin@africajobagency.bj"
    }
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Container className="py-5" style={{ maxWidth: "900px" }}>
        <h1 className="fw-bold" style={{ fontSize: "2.2rem", color: "#202124" }}>
          {title}
        </h1>
        <p className="text-muted mb-5" style={{ fontSize: "1.1rem" }}>
          {lastUpdate}
        </p>

        {sections.map((section, idx) => (
          <section key={idx} className="mb-5">
            <h4 className="fw-semibold mb-3">{section.title}</h4>
            {section.text && !section.email && <p>{section.text}</p>}
            {section.textList && (
              <ul>
                {section.textList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.email && (
              <p>
                {section.text}{" "}
                <a href={`mailto:${section.email}`} className="text-primary">
                  {section.email}
                </a>
              </p>
            )}
          </section>
        ))}
      </Container>
    </div>
  );
}
