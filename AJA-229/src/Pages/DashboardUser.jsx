// src/pages/UserDashboard.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Table, Badge, Image, Spinner, Alert, Button } from "react-bootstrap";
import axios from "axios";

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        // Remplacez par votre endpoint réel (ex: /api/user/profile)
        // Si vous utilisez JWT, n'oubliez pas d'ajouter les headers Authorization
        const response = await axios.get("http://votre-api.com/api/user/dashboard");
        setUserData(response.data);
      } catch (err) {
        console.error("Erreur dashboard:", err);
        setError("Impossible de charger vos données personnelles.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Fonction utilitaire pour le style des badges
  const getStatusBadge = (status) => {
    const map = {
      "Acceptée": { bg: "success", icon: "check-circle" },
      "Rejetée": { bg: "danger", icon: "x-circle" },
      "En attente": { bg: "warning", icon: "clock" },
      "Entretien": { bg: "info", icon: "person-video3" }
    };
    const config = map[status] || { bg: "secondary", icon: "question-circle" };
    return <Badge bg={config.bg} className="px-3 py-2 rounded-pill">
             <i className={`bi bi-${config.icon} me-1`}></i> {status}
           </Badge>;
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="grow" variant="primary" />
        <p className="mt-3 text-muted">Préparation de votre espace personnel...</p>
      </Container>
    );
  }

  if (error || !userData) {
    return (
      <Container className="py-5">
        <Alert variant="danger" className="rounded-4">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {error || "Une erreur est survenue."}
        </Alert>
        <Button variant="primary" onClick={() => window.location.reload()}>Réessayer</Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">Mon Tableau de Bord</h2>
      <Row className="g-4">
        {/* Sidebar Profil */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="bg-primary" style={{ height: "100px" }}></div>
            <Card.Body className="text-center mt-n5">
              <Image
                src={userData.avatar || "https://via.placeholder.com/150"}
                roundedCircle
                style={{ 
                  width: "120px", 
                  height: "120px", 
                  marginTop: "-60px", 
                  border: "5px solid white",
                  objectFit: "cover" 
                }}
                className="shadow-sm mb-3"
              />
              <h4 className="fw-bold mb-1">{userData.name}</h4>
              <p className="text-muted mb-3">{userData.email}</p>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" size="sm" className="rounded-pill">
                  Modifier le profil
                </Button>
                <Badge bg="light" text="dark" className="p-2 border">
                   Compte {userData.role}
                </Badge>
              </div>
            </Card.Body>
          </Card>

          {/* Mini Stats ou Resume Recap */}
          <Card className="border-0 shadow-sm rounded-4 mt-4 p-3">
             <div className="d-flex justify-content-around">
                <div className="text-center">
                   <h5 className="fw-bold mb-0">{userData.applications?.length || 0}</h5>
                   <small className="text-muted">Postulations</small>
                </div>
                <div className="vr"></div>
                <div className="text-center">
                   <h5 className="fw-bold mb-0">
                     {userData.applications?.filter(a => a.status === "Acceptée").length}
                   </h5>
                   <small className="text-muted">Succès</small>
                </div>
             </div>
          </Card>
        </Col>

        {/* Historique principal */}
        <Col lg={8}>
          <Card className="border-0 shadow-sm rounded-4 h-100">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Mes candidatures récentes</h5>
                <Button variant="link" className="text-decoration-none p-0">Voir tout</Button>
              </div>

              {userData.applications && userData.applications.length > 0 ? (
                <div className="table-responsive">
                  <Table borderless hover verticalAlign="middle">
                    <thead className="text-muted small text-uppercase">
                      <tr>
                        <th className="fw-normal">Poste & Entreprise</th>
                        <th className="fw-normal">Date</th>
                        <th className="fw-normal text-end">Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.applications.map((app, idx) => (
                        <tr key={idx} style={{ borderBottom: "1px solid #f8f9fa" }}>
                          <td className="py-3">
                            <div className="fw-bold text-dark">{app.jobTitle}</div>
                            <small className="text-muted">{app.company}</small>
                          </td>
                          <td className="text-muted small">
                            {new Date(app.dateApplied).toLocaleDateString('fr-FR', {
                               day: 'numeric', month: 'short', year: 'numeric'
                            })}
                          </td>
                          <td className="text-end">
                            {getStatusBadge(app.status)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-5">
                  <i className="bi bi-folder2-open display-1 text-light"></i>
                  <p className="mt-3 text-muted">Vous n'avez pas encore postulé à des offres.</p>
                  <Button href="/offres" variant="primary">Découvrir les offres</Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;