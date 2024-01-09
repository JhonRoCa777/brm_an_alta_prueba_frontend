import { Carrito, ListaProductos } from "@/components/organism";
import { Col, Row } from "react-bootstrap";

function Dashboard() {
    return (
        <>
            <Row>
                <Col sm="12" md="6" lg="6">
                    <Carrito/>
                </Col>
                <Col sm="12" md="6" lg="6">
                    <ListaProductos/>
                </Col>
            </Row>
        </>
    );
} export default Dashboard;