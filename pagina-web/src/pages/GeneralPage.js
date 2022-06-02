import Form from "../components/Form";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function GeneralPage() {
      return(
      
      <Container>
        <h2 className="titulo">Diagnostico General</h2>
        <p className="descripcion">Si desea conocer que enfermedad respiratoria tiene,
          es necesario que responda todas las preguntas .
        </p>
        <Row className={"justify-content-center"}>
          <Col xs={6}>
            <Card className="p-4">
              <Form/>
            </Card>
          </Col>
        </Row>
      </Container>
      
    );
  }

export default GeneralPage;