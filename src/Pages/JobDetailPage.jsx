// Pages/JobDetailPage.jsx
import React, { useState } from "react"; // ⬅️ Importer useState
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Badge, ListGroup, Button, Modal, Form } from "react-bootstrap";
import jobs from "./Jobs"; // Importez les données des offres d'emploi (assurez-vous que le chemin est correct)

// --- Nouveau composant Modale de Candidature ---
const CandidatureModal = ({ show, handleClose, jobTitle }) => {
    // Logic de soumission irait ici (e.g., const handleSubmit = () => { ... })
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title>Postuler pour : {jobTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nom complet</Form.Label>
                        <Form.Control type="text" placeholder="Entrez votre nom" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Adresse email</Form.Label>
                        <Form.Control type="email" placeholder="Entrez votre email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCV">
                        <Form.Label>Téléverser CV (PDF/DOC)</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message de motivation (Optionnel)</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 mt-3">
                        Envoyer la candidature
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};
// -------------------------------------------------


const JobDetailPage = () => {
    // ⬅️ Définir l'état pour contrôler la modale
    const [showModal, setShowModal] = useState(false);
    
    // Fonctions pour ouvrir/fermer la modale
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const { id } = useParams();
    const navigate = useNavigate();

    const job = jobs.find((j) => j.id === parseInt(id));
    
    if (!job) {
        // ... (votre code 404)
        return (
            <Container className="py-5 text-center">
              <h2>Offre non trouvée (404)</h2>
              <Button variant="secondary" className="mt-3" onClick={() => navigate('/offres')}>Retour aux offres</Button>
            </Container>
          );
    }

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg rounded-4">
                        <Card.Body>
                            {/* ... autres détails du job ... */}
                            <Button variant="link" className="mb-3 ps-0" onClick={() => navigate(-1)}>
                                &larr; Retour à la liste
                            </Button>
                            <h2 className="text-primary mb-3">{job.title}</h2>
                            <p className="text-muted">{job.location}</p>
                            <Badge bg="info" className="me-2">{job.type}</Badge>
                            <Badge bg="secondary">{job.contractDetail}</Badge>

                            <h4 className="mt-4">Description</h4>
                            <p>{job.description}</p>

                            <h4 className="mt-4">Responsabilités</h4>
                            <ListGroup className="mb-4">
                                {job.responsibilities.map((r, idx) => (
                                    <ListGroup.Item key={idx}>{r}</ListGroup.Item>
                                ))}
                            </ListGroup>

                            {/* 🚨 MODIFICATION ICI : Appel de handleShow au lieu de navigate */}
                            <Button variant="primary" size="lg" onClick={handleShow}>
                                Postuler maintenant
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* 🚨 AFFICHAGE DE LA MODALE ICI */}
            <CandidatureModal 
                show={showModal} 
                handleClose={handleClose} 
                jobTitle={job.title} 
            />
        </Container>
    );
};

export default JobDetailPage;