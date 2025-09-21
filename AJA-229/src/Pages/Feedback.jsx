// src/Pages/Feedback.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ➡️ Ici, tu pourrais envoyer les données à ton backend
    console.log({ rating, comment });
    setSubmitted(true);
    setRating(0);
    setComment("");
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg rounded-4">
            <Card.Body>
              <h2 className="text-primary mb-4 text-center">📝 Donnez votre avis</h2>

              {submitted && (
                <Alert
                  variant="success"
                  onClose={() => setSubmitted(false)}
                  dismissible
                >
                  ✅ Merci pour votre retour ! Nous apprécions votre feedback.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                {/* ⭐ Sélection de la note */}
                <Form.Group className="mb-4 text-center">
                  <Form.Label className="d-block">Votre note</Form.Label>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Button
                      key={value}
                      variant={rating >= value ? "warning" : "outline-secondary"}
                      className="mx-1 rounded-circle"
                      onClick={() => handleRating(value)}
                      type="button"
                    >
                      ⭐
                    </Button>
                  ))}
                </Form.Group>

                {/* ✍️ Champ commentaire */}
                <Form.Group className="mb-4" controlId="comment">
                  <Form.Label>Votre commentaire</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Partagez vos impressions ou suggestions..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" size="lg" type="submit">
                    📤 Envoyer
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

export default Feedback;
