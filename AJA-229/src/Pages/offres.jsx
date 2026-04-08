// JobDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Badge, ListGroup, Button, Spinner, Alert } from "react-bootstrap";
import axios from "axios"; // Assurez-vous d'avoir installé axios : npm install axios

const Offre = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // États pour gérer les données, le chargement et les erreurs
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        // Remplacez l'URL par celle de votre API réelle
        const response = await axios.get(`http://votre-api.com/api/jobs/${id}`);
        setJob(response.data);
        setError(null);
      } catch (err) {
        console.error("Erreur lors de la récupération :", err);
        setError("Impossible de charger les détails de l'offre.");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  // 1. État de chargement
  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Chargement de l'offre...</p>
      </Container>
    );
  }

  // 2. Gestion du cas "non trouvé" ou erreur
  if (error || !job) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          {error || "Offre introuvable."}
        </Alert>
        <Button variant="secondary" onClick={() => navigate("/")}>Retour aux offres</Button>
      </Container>
    );
  }

  // 3. Rendu de la page avec les données reçues
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg rounded-4 border-0">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h2 className="text-primary mb-1">{job.title}</h2>
                  <p className="text-muted">{job.location}</p>
                </div>
                <Badge bg="info" className="px-3 py-2">{job.type}</Badge>
              </div>

              <hr />

              <h4 className="mt-4">Description</h4>
              <p style={{ whiteSpace: "pre-line" }}>{job.description}</p>

              {job.responsibilities && job.responsibilities.length > 0 && (
                <>
                  <h4 className="mt-4">Responsabilités</h4>
                  <ListGroup variant="flush" className="mb-4">
                    {job.responsibilities.map((r, idx) => (
                      <ListGroup.Item key={idx} className="border-0 ps-0">
                        • {r}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </>
              )}

              <div className="d-grid gap-2 d-md-block mt-5">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="px-5 py-3 rounded-pill"
                  onClick={() => navigate(`/soumission/${id}`)}
                >
                  Postuler maintenant
                </Button>
                <Button 
                  variant="outline-secondary" 
                  size="lg" 
                  className="ms-md-3 px-4 py-3 rounded-pill"
                  onClick={() => navigate(-1)}
                >
                  Retour
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Offre;