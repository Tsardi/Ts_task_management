import { Col, Container } from "react-bootstrap";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
// import TaskDashboard from "./TaskDashboard";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Col>
        <h1>Task Management Dashboard</h1>
        {/* <TaskDashboard /> */}
        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;
