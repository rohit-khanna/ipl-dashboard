
import './App.scss';
import { Container } from 'react-bootstrap';
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Content from "./components/content"
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Container >
      <Router >
        <Header />
        <section className="d-flex mainContent">
          <Sidebar />
          <Content />
        </section>
      </Router>
    </Container>
  );
}

export default App;
