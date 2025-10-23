import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsPeopleFill } from "react-icons/bs";
import ModalRendezVous from "../components/ModalRendezVous"; // adapte le chemin

const Recrutement = () => {
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
        <BsPeopleFill className="text-primary me-2" />
        Recrutement
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
                  <Badge bg="primary" className="mb-3 px-3 py-2 fs-6">
                    Service Premium
                  </Badge>
                  <p className="lead text-muted">
                    Le secteur du recrutement et de l'intérim en Afrique souffre
                    d'un manque de transparence.{" "}
                    <span className="text-primary fw-bold">
                      AFRICA JOB AGENCY 229
                    </span>{" "}
                    lutte contre ces pratiques et garantit un processus
                    participatif, un suivi des candidats et un respect strict de
                    l'éthique.
                  </p>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                      ✅ Processus de recrutement participatif avec le client.
                    </li>
                    <li className="mb-2">
                      ✅ Suivi des candidats jusqu’à la fin de leur période
                      d’essai.
                    </li>
                    <li className="mb-2">
                      ✅ Confidentialité et écoute active via nos canaux de
                      contact.
                    </li>
                  </ul>
                  <div className="text-center mt-4">
                    <Button
                      variant="primary"
                      size="lg"
                      className="rounded-pill px-4 py-2 shadow-sm"
                      onClick={openModal}
                    >
                      🚀 Prendre Rendez-vous
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
        serviceTitle="Recrutement"
      />
    </Container>
  );
};

export default Recrutement;
