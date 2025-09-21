// src/pages/Profil.js
import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col, Image } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function Profil() {
  // État utilisateur simulé
  const [user, setUser] = useState({
    nom: "Utilisateur",
    email: "exemple@mail.com",
    telephone: "",
    role: "",
    photo: "",
  });

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser((prev) => ({ ...prev, photo: URL.createObjectURL(file) }));
    }
  };

  const handleSave = () => {
    alert("✅ Modifications enregistrées automatiquement !");
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("❌ Les mots de passe ne correspondent pas !");
      return;
    }
    alert("✅ Mot de passe changé avec succès !");
    setNewPassword("");
    setConfirmPassword("");
  };

  const turquoiseButton = {
    backgroundColor: "#28a397f4",
    borderColor: "#40e0d0",
    color: "#fff",
  };

  const updateButton = {
    backgroundColor: "#27ae60",
    borderColor: "#27ae60",
    color: "#fff",
  };

  return (
    <Container className="my-5">
      <Card className="shadow-lg p-4">
        <h2 className="text-center mb-4">Mon Profil</h2>

        {/* Photo de profil */}
        <Row className="mb-4 text-center">
          <Col>
            {user.photo ? (
              <Image src={user.photo} roundedCircle width="120" height="120" alt="Profile Photo" />
            ) : (
              <FaUserCircle size={120} color="#aaa" />
            )}
            <div className="mt-2">
              <Form.Control type="file" accept="image/*" onChange={handlePhotoChange} />
            </div>
          </Col>
        </Row>

        {/* Informations utilisateur */}
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="nom" value={user.nom} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={user.email} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="text" name="telephone" value={user.telephone} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Rôle</Form.Label>
                <Form.Select name="role" value={user.role} onChange={handleChange}>
                  <option value="">Sélectionnez un rôle</option>
                  <option value="Administrateur">Administrateur</option>
                  <option value="Utilsateur">Utilisateur</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center">
            <Button style={turquoiseButton} onClick={handleSave}>
              Sauvegarder les modifications
            </Button>
          </div>
        </Form>

        <hr className="my-4" />
        <h5 className="mb-3">Changer le mot de passe</h5>

        {/* Changement du mot de passe */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nouveau mot de passe</Form.Label>
            <Form.Control type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirmer le mot de passe</Form.Label>
            <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Form.Group>
          <Button style={updateButton} onClick={handlePasswordChange}>
            Mettre à jour le mot de passe
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
