import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { JobsContext } from "../context/JobsContext";

// Simuler un utilisateur connecté
const currentUser = {
  name: "Frank",
  role: "admin",
};

const AjoutOffre = () => {
  const { addJob } = useContext(JobsContext); // récupérer la fonction pour ajouter un job
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "CDI",
    salary: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(formData); // Ajouter l'offre via le contexte
    setSubmitted(true);
    setFormData({
      title: "",
      company: "",
      location: "",
      type: "CDI",
      salary: "",
      description: "",
    });
  };

  if (currentUser.role !== "admin") {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg rounded-4 text-center p-5">
              <h3 className="text-danger">🚫 Accès refusé</h3>
              <p>Vous n'avez pas les droits pour accéder à cette page.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg rounded-4">
            <Card.Body>
              <h2 className="text-primary mb-4">Ajouter une offre d’emploi</h2>

              {submitted && (
                <Alert
                  variant="success"
                  onClose={() => setSubmitted(false)}
                  dismissible
                >
                  ✅ Offre d’emploi ajoutée avec succès !
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="jobTitle">
                  <Form.Label>Titre du poste</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ex. Développeur Frontend React"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="companyName">
                  <Form.Label>Entreprise</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ex. AJA-229"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="location">
                  <Form.Label>Lieu</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ex. Cotonou, Bénin"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="jobType">
                  <Form.Label>Type de contrat</Form.Label>
                  <Form.Select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="CDI">CDI</option>
                    <option value="CDD">CDD</option>
                    <option value="Interim">Intérim</option>
                    <option value="Stage">Stage</option>
                    <option value="Freelance">Freelance</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="salary">
                  <Form.Label>Salaire</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ex. Selon profil"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="description">
                  <Form.Label>Description du poste</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Décrivez les responsabilités, exigences, et avantages..."
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" size="lg" type="submit">
                    ➕ Ajouter l’offre
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AjoutOffre;
