import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsMegaphone } from "react-icons/bs";
import ModalRendezVous from "../components/ModalRendezVous"; // adapte le chemin selon ton projet

const Interim = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Animations Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const cardHover = {
    hover: { scale: 1.03, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" },
  };

  return (
    <Container className="py-5">
      <motion.h2
        className="text-center mb-4 fw-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <BsMegaphone className="text-warning me-2" />
        Intérim
      </motion.h2>

      <Row className="justify-content-center">
        <Col md={10}>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div variants={cardHover} whileHover="hover">
              <Card className="p-4 shadow border-0 rounded-4">
                <Card.Body>
                  <Badge bg="warning" text="dark" className="mb-3 px-3 py-2 fs-6">
                    Flexibilité Maximale
                  </Badge>
                  <p className="lead text-muted">
                    Nous proposons une solution flexible pour gérer vos besoins ponctuels
                    et optimiser vos ressources humaines avec efficacité et professionnalisme.
                  </p>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">✅ Recrutement et placement de personnel qualifié.</li>
                    <li className="mb-2">✅ Gestion des effectifs et des contrats.</li>
                    <li className="mb-2">✅ Optimisation des Ressources Humaines et suivi des déclarations.</li>
                  </ul>
                  <div className="text-center mt-4">
                    <Button
                      variant="warning"
                      className="rounded-pill px-4 py-2 shadow-sm text-dark fw-bold"
                      size="lg"
                      onClick={openModal}
                    >
                      📢 Prendre Rendez-vous
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </motion.div>
        </Col>
      </Row>

      {/* Modal Formulaire */}
      <ModalRendezVous
        show={showModal}
        onClose={closeModal}
        serviceTitle="Intérim"
      />
    </Container>
  );
};

export default Interim;
