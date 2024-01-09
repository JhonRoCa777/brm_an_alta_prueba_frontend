import { Card, Col, Row } from "react-bootstrap";
import { FormSubmitLogin } from "@/components/organism";
function Login({}) {
    return (
        <>
            <Row style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Col sm="12" md="12" lg="6">
                    <Card style={{marginBottom: "25px"}}>
                        <Card.Header as="h5"> BIENVENIDO </Card.Header>
                        <Card.Body>
                            <FormSubmitLogin/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
} export default Login;