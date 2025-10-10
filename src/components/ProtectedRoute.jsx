import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Spinner, Container } from 'react-bootstrap';

const ProtectedRoute = ({ children, adminOnly = false, requiredRole = null }) => {
  const { user, loading, isAdmin, hasRole } = useAuth();

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin()) {
    return <Navigate to="/unauthorized" replace />;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;