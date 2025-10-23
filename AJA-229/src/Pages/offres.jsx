// JobDetailPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Badge, ListGroup, Button } from "react-bootstrap";

// Exemple d'offres simulées
const jobs = [
  {
    id: 1,
    title: "Développeur Web Full-Stack",
    location: "Paris, France",
    type: "CDI",
    description: "Participez au développement d’applications web performantes dans une entreprise innovante.",
    responsibilities: [
      "Développer des interfaces web réactives et optimisées",
      "Collaborer avec les designers",
      "Maintenir et optimiser le code"
    ],
  },
  {
    id: 2,
    title: "Chargé de Communication",
    location: "Marseille, France",
    type: "Stage",
    description: "Animez la communication interne et externe pour renforcer l’image de l’entreprise.",
    responsibilities: ["Gestion des réseaux sociaux", "Communication interne", "Organisation d’événements"]
  },
];

const Offre = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === parseInt(id));
  if (!job) return <p>Offre non trouvée</p>;

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg rounded-4">
            <Card.Body>
              <h2 className="text-primary mb-3">{job.title}</h2>
              <p className="text-muted">{job.location}</p>
              <Badge bg="info">{job.type}</Badge>

              <h4 className="mt-4">Description</h4>
              <p>{job.description}</p>

              <h4 className="mt-4">Responsabilités</h4>
              <ListGroup className="mb-4">
                {job.responsibilities.map((r, idx) => (
                  <ListGroup.Item key={idx}>{r}</ListGroup.Item>
                ))}
              </ListGroup>

              <Button variant="primary" size="lg" onClick={() => navigate("/soumission")}>
                Postuler maintenant
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Offre;
