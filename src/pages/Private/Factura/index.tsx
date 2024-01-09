import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Factura() {

    const params = useParams();

    return (
        <>
            <Row>
                <Col sm="12" md="6" lg="6">
                    <h1>Facturas {params.id} </h1>
                </Col>
            </Row>
        </>
    );
} export default Factura;