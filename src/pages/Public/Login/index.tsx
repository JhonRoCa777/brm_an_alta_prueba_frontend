import { Card, Col, Row } from "react-bootstrap";

function Login({}) {
    return (
        <>
            <Row>
                <Col sm="12" md="12" lg="6">
                    <Card style={{marginBottom: "25px"}}>
                        <Card.Header as="h5"> BIENVENIDO </Card.Header>
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col sm="12" md="12" lg="6">
                    <Card>
                        <Card.Header as="h5"> CONSULTA TU SALDO </Card.Header>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
} export default Login;