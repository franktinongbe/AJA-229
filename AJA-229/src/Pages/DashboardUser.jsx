import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Table, Badge, Image } from "react-bootstrap";

// Données simulées pour l'utilisateur
const currentUser = {
  name: "Frank Tinongbe",
  email: "frank@example.com",
  role: "Utilisateur",
  avatar: "https://i.pravatar.cc/150?img=3",
  applications: [
    { jobTitle: "Développeur Frontend React", company: "AJA-229", dateApplied: "2025-08-20", status: "En attente" },
    { jobTitle: "Designer UX/UI", company: "Geyris", dateApplied: "2025-07-15", status: "Rejetée" },
    { jobTitle: "Backend Node.js", company: "TechCorp", dateApplied: "2025-09-05", status: "Acceptée" },
  ],
};

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(currentUser);
  }, []);

  if (!user) return <p>Chargement...</p>;

  return (
    <Container className="py-5">
      <Row>
        {/* Profil utilisateur */}
        <Col md={4}>
          <Card className="shadow-lg mb-4">
            <Card.Body className="text-center">
              <Image
                src={user.avatar}
                roundedCircle
                width={120}
                height={120}
                className="mb-3"
              />
              <h4>{user.name}</h4>
              <p>{user.email}</p>
              <Badge bg="secondary">{user.role}</Badge>
            </Card.Body>
          </Card>
        </Col>

        {/* Historique des candidatures */}
        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <h4 className="mb-4">Historique des candidatures</h4>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Poste</th>
                    <th>Entreprise</th>
                    <th>Date de candidature</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {user.applications.map((app, idx) => (
                    <tr key={idx}>
                      <td>{app.jobTitle}</td>
                      <td>{app.company}</td>
                      <td>{app.dateApplied}</td>
                      <td>
                        <Badge
                          bg={
                            app.status === "Acceptée"
                              ? "success"
                              : app.status === "Rejetée"
                              ? "danger"
                              : "warning"
                          }
                        >
                          {app.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
