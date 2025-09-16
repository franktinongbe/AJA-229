import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalRendezVous = ({ show, onClose, serviceTitle }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Prendre Rendez-vous : {serviceTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nom complet</Form.Label>
            <Form.Control type="text" placeholder="Votre nom" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Votre email" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date du rendez-vous</Form.Label>
            <Form.Control type="date" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Votre message" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Envoyer
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalRendezVous;
